import fs from "fs";
import path from "path";

import { ArchetypeContent, ArchetypeKey } from "@/types/identity";

function parseList(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace("- ", "").trim());
}

function parseArchetypeFile(fileContent: string, key: ArchetypeKey): ArchetypeContent {
  const blocks = fileContent.split(/\n(?=[a-z_]+:)/g);
  const map = new Map<string, string>();

  for (const block of blocks) {
    const [head, ...rest] = block.split("\n");
    const separatorIndex = head.indexOf(":");
    const sectionKey = head.slice(0, separatorIndex);
    const initialValue = head.slice(separatorIndex + 1).trim();
    const body = [initialValue, ...rest].join("\n").trim();
    map.set(sectionKey, body);
  }

  return {
    key,
    title: map.get("title") ?? key,
    description: map.get("description") ?? "",
    strengths: parseList(map.get("strengths") ?? ""),
    weaknesses: parseList(map.get("weaknesses") ?? ""),
    visualRecommendations: parseList(map.get("visual_recommendations") ?? ""),
    businessRecommendations: parseList(map.get("business_recommendations") ?? ""),
  };
}

export function getArchetypeContent(key: ArchetypeKey): ArchetypeContent {
  const filePath = path.join(process.cwd(), "src", "content", `${key}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return parseArchetypeFile(fileContent, key);
}
