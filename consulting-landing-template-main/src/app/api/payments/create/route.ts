import { NextRequest, NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { createCheckoutSession } from "@/services/checkout-service";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const locale = isLocale(body.locale) ? body.locale : "ru";
  const session = await createCheckoutSession({
    locale,
    customerEmail: body.customerEmail,
  });

  return NextResponse.json(session);
}
