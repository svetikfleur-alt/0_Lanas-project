import { NextRequest, NextResponse } from "next/server";

import { createCheckoutSession } from "@/services/checkout-service";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { email: string };
  const session = await createCheckoutSession(body.email);
  return NextResponse.json(session);
}
