import { NextRequest, NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { getOrder, updateOrderStatus } from "@/services/order-store";
import { withLocale } from "@/services/locale";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("orderId");
  const localeParam = searchParams.get("locale") ?? "ru";
  const locale = isLocale(localeParam) ? localeParam : "ru";
  const action = searchParams.get("action");

  if (!orderId) {
    return NextResponse.redirect(new URL(withLocale(locale, "/payment-cancel"), request.url));
  }

  if (action === "success") {
    updateOrderStatus(orderId, "paid");
    return NextResponse.redirect(
      new URL(`${withLocale(locale, "/payment-success")}?orderId=${orderId}`, request.url),
    );
  }

  if (action === "cancel") {
    updateOrderStatus(orderId, "cancelled");
    return NextResponse.redirect(new URL(withLocale(locale, "/payment-cancel"), request.url));
  }

  const order = getOrder(orderId);

  if (!order) {
    return NextResponse.redirect(new URL(withLocale(locale, "/payment-cancel"), request.url));
  }

  const successUrl = new URL(request.url);
  successUrl.searchParams.set("orderId", orderId);
  successUrl.searchParams.set("locale", locale);
  successUrl.searchParams.set("action", "success");

  const cancelUrl = new URL(request.url);
  cancelUrl.searchParams.set("orderId", orderId);
  cancelUrl.searchParams.set("locale", locale);
  cancelUrl.searchParams.set("action", "cancel");

  const html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Hosted Checkout</title>
      <style>
        body { font-family: sans-serif; background: #f6efe8; color: #221c1b; padding: 40px; }
        .card { max-width: 620px; margin: 0 auto; background: white; border-radius: 24px; padding: 32px; box-shadow: 0 24px 60px rgba(34,28,27,.08); }
        a { display: inline-block; margin-right: 12px; padding: 12px 20px; border-radius: 999px; text-decoration: none; }
        .primary { background: #221c1b; color: white; }
        .secondary { border: 1px solid rgba(34,28,27,.15); color: #221c1b; }
      </style>
    </head>
    <body>
      <div class="card">
        <p>Simulated hosted checkout</p>
        <h1>Visual Identity Lab MVP</h1>
        <p>Order: ${order.orderId}</p>
        <p>Amount: ${order.amount / 100} ${order.currency}</p>
        <p>This page stands in for Fondy hosted checkout until real merchant credentials are connected.</p>
        <a class="primary" href="${successUrl.toString()}">Confirm payment</a>
        <a class="secondary" href="${cancelUrl.toString()}">Cancel</a>
      </div>
    </body>
  </html>`;

  return new NextResponse(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
