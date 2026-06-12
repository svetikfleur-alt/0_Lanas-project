import { NextRequest, NextResponse } from "next/server";

import { analyzeIdentity } from "@/services/analysis-service";
import { isLocale } from "@/i18n/config";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const locale = isLocale(body.locale) ? body.locale : "ru";
  const analysis = await analyzeIdentity(body.answers ?? {}, locale);
  return NextResponse.json(analysis);
}
