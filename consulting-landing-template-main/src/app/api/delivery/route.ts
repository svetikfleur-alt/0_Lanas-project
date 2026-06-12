import { NextRequest, NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { prepareTelegramDelivery } from "@/services/telegram-delivery-service";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const locale = isLocale(body.locale) ? body.locale : "ru";

  try {
    const receipt = await prepareTelegramDelivery(body.orderId, locale);
    return NextResponse.json(receipt);
  } catch {
    return NextResponse.json(
      { message: "Delivery is pending payment confirmation." },
      { status: 409 },
    );
  }
}
