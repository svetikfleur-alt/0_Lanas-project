import { readFile } from "node:fs/promises";
import path from "node:path";

import { ArchetypeContent, ArchetypeKey, Locale } from "@/types/identity";

type SectionMap = {
  [key: string]: string[];
};

function parseSectionList(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

function parseContent(raw: string, key: ArchetypeKey): ArchetypeContent {
  const [titleLine, ...restLines] = raw.trim().split("\n");
  const title = titleLine.replace(/^#\s*/, "").trim();
  const rest = restLines.join("\n");
  const parts = rest.split("\n## ");
  const description = parts[0].trim();
  const sections: SectionMap = {};

  for (const chunk of parts.slice(1)) {
    const [headingLine, ...contentLines] = chunk.split("\n");
    sections[headingLine.trim().toLowerCase()] = contentLines;
  }

  return {
    key,
    title,
    description,
    strengths: parseSectionList(sections.strengths?.join("\n")),
    blindSpots: parseSectionList(sections["blind spots"]?.join("\n")),
    visualRecommendations: parseSectionList(sections["visual recommendations"]?.join("\n")),
    businessRecommendations: parseSectionList(sections["business recommendations"]?.join("\n")),
    promptIdeas: parseSectionList(sections["prompt ideas"]?.join("\n")),
  };
}

export async function getArchetypeContent(
  locale: Locale,
  key: ArchetypeKey,
): Promise<ArchetypeContent> {
  const filePath = path.join(process.cwd(), "src", "content", locale, `${key}.md`);
  const raw = await readFile(filePath, "utf8");
  return parseContent(raw, key);
}

export async function getAllArchetypes(locale: Locale): Promise<ArchetypeContent[]> {
  return Promise.all([
    getArchetypeContent(locale, "queen"),
    getArchetypeContent(locale, "mentor"),
    getArchetypeContent(locale, "creator"),
  ]);
}
