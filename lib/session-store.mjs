import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { DatabaseSync } from "node:sqlite";

function now() {
  return new Date().toISOString();
}

function parseAnswers(raw) {
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export class SessionStore {
  constructor(filePath) {
    mkdirSync(dirname(filePath), { recursive: true });
    this.db = new DatabaseSync(filePath);

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS sessions (
        chat_id INTEGER PRIMARY KEY,
        locale TEXT,
        stage TEXT NOT NULL,
        question_index INTEGER NOT NULL,
        answers_json TEXT NOT NULL,
        summary_text TEXT,
        source TEXT,
        user_first_name TEXT,
        username TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        completed_at TEXT
      );
    `);

    this.selectStatement = this.db.prepare(`
      SELECT
        chat_id,
        locale,
        stage,
        question_index,
        answers_json,
        summary_text,
        source,
        user_first_name,
        username,
        created_at,
        updated_at,
        completed_at
      FROM sessions
      WHERE chat_id = ?
    `);

    this.upsertStatement = this.db.prepare(`
      INSERT INTO sessions (
        chat_id,
        locale,
        stage,
        question_index,
        answers_json,
        summary_text,
        source,
        user_first_name,
        username,
        created_at,
        updated_at,
        completed_at
      ) VALUES (
        @chatId,
        @locale,
        @stage,
        @questionIndex,
        @answersJson,
        @summaryText,
        @source,
        @userFirstName,
        @username,
        @createdAt,
        @updatedAt,
        @completedAt
      )
      ON CONFLICT(chat_id) DO UPDATE SET
        locale = excluded.locale,
        stage = excluded.stage,
        question_index = excluded.question_index,
        answers_json = excluded.answers_json,
        summary_text = excluded.summary_text,
        source = excluded.source,
        user_first_name = excluded.user_first_name,
        username = excluded.username,
        updated_at = excluded.updated_at,
        completed_at = excluded.completed_at
    `);
  }

  createSession(chatId, seed = {}) {
    const timestamp = now();

    return {
      chatId,
      locale: seed.locale || null,
      stage: seed.stage || "idle",
      questionIndex: seed.questionIndex || 0,
      answers: seed.answers || {},
      summaryText: seed.summaryText || "",
      source: seed.source || "direct",
      userFirstName: seed.userFirstName || "",
      username: seed.username || "",
      createdAt: seed.createdAt || timestamp,
      updatedAt: seed.updatedAt || timestamp,
      completedAt: seed.completedAt || null,
    };
  }

  getSession(chatId) {
    const row = this.selectStatement.get(chatId);
    if (!row) return null;

    return {
      chatId: row.chat_id,
      locale: row.locale,
      stage: row.stage,
      questionIndex: row.question_index,
      answers: parseAnswers(row.answers_json),
      summaryText: row.summary_text || "",
      source: row.source || "direct",
      userFirstName: row.user_first_name || "",
      username: row.username || "",
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      completedAt: row.completed_at,
    };
  }

  saveSession(session) {
    const persisted = {
      ...session,
      updatedAt: now(),
      createdAt: session.createdAt || now(),
    };

    this.upsertStatement.run({
      chatId: persisted.chatId,
      locale: persisted.locale,
      stage: persisted.stage,
      questionIndex: persisted.questionIndex,
      answersJson: JSON.stringify(persisted.answers || {}),
      summaryText: persisted.summaryText || "",
      source: persisted.source || "direct",
      userFirstName: persisted.userFirstName || "",
      username: persisted.username || "",
      createdAt: persisted.createdAt,
      updatedAt: persisted.updatedAt,
      completedAt: persisted.completedAt || null,
    });

    return persisted;
  }
}
