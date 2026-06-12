import { NextRequest, NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { generateImageConcept } from "@/services/image-generation-service";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const locale = isLocale(body.locale) ? body.locale : "ru";
  const payload = await generateImageConcept(body.analysis, locale);
  return NextResponse.json(payload);
}
