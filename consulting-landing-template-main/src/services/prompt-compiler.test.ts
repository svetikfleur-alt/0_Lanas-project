import { describe, expect, it } from "vitest";

import { compilePrompt } from "@/services/prompt-compiler";
import { IdentityAnalysis } from "@/types/identity";

describe("compilePrompt", () => {
  it("builds a prompt from the provided identity analysis", () => {
    const analysis: IdentityAnalysis = {
      archetype: "queen",
      visualDirection: ["editorial luxury", "magnetic confidence", "modern interior"],
      strengths: ["Authority"],
      blindSpots: ["Can feel distant."],
      imageBrief: "Personal branding shoot for a founder.",
    };

    const result = compilePrompt(analysis);

    expect(result.subject).toBe("woman embodying the queen archetype");
    expect(result.style).toBe("editorial luxury");
    expect(result.emotion).toBe("magnetic confidence");
    expect(result.environment).toBe("modern interior");
    expect(result.fullPrompt).toContain("Brief: Personal branding shoot for a founder.");
  });

  it("uses defaults when visual direction is incomplete", () => {
    const analysis: IdentityAnalysis = {
      archetype: "mentor",
      visualDirection: [],
      strengths: ["Trust"],
      blindSpots: ["Can understate expertise."],
      imageBrief: "Portrait set for a consultant.",
    };

    const result = compilePrompt(analysis);

    expect(result.style).toBe("elevated personal branding");
    expect(result.emotion).toBe("grounded confidence");
    expect(result.environment).toBe("studio portrait setting");
  });
});
