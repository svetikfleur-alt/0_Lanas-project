import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  return NextResponse.json({
    ok: true,
    provider: "paypal",
    message: "Webhook skeleton is ready for a future provider adapter.",
  });
}
