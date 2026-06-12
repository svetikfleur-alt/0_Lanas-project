import { NextRequest, NextResponse } from "next/server";

import { getPaymentProvider } from "@/providers/payment";
import { updateOrderStatus } from "@/services/order-store";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const verification = await getPaymentProvider().verifyWebhook(body);

  if (!verification.isValid || !verification.orderId) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (verification.status) {
    updateOrderStatus(verification.orderId, verification.status);
  }

  return NextResponse.json({ ok: true, orderId: verification.orderId });
}
