import { NextRequest, NextResponse } from "next/server";

import { analyzeIdentity } from "@/services/analysis-service";
import { generateIdentityImages } from "@/services/image-generation-service";
import { compilePrompt } from "@/services/prompt-compiler";
import { IdentityAnalysis, QuizAnswers } from "@/types/identity";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { answers: QuizAnswers };
  const analysis = await analyzeIdentity(body.answers);
  return NextResponse.json(analysis);
}

export async function PUT(request: NextRequest) {
  const body = (await request.json()) as { analysis: IdentityAnalysis };
  const prompt = compilePrompt(body.analysis);
  const images = await generateIdentityImages(prompt);
  return NextResponse.json(images);
}
