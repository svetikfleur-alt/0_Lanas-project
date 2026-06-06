const crypto = require("crypto");
const { paymentConfig } = require("../config");
const { createBasicAuth } = require("../utils");

class PayPalProvider {
  getProviderName() {
    return "paypal";
  }

  async getAccessToken() {
    if (!paymentConfig.paypal.clientId || !paymentConfig.paypal.clientSecret) {
      throw new Error("PayPal credentials are not configured");
    }

    const response = await fetch(`${paymentConfig.paypal.apiBase}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${createBasicAuth(
          paymentConfig.paypal.clientId,
          paymentConfig.paypal.clientSecret
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const payload = await response.json();
    if (!response.ok || !payload.access_token) {
      throw new Error(payload.error_description || "Failed to obtain PayPal access token");
    }

    return payload.access_token;
  }

  async createCheckoutSession(order) {
    const accessToken = await this.getAccessToken();
    const response = await fetch(`${paymentConfig.paypal.apiBase}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": crypto.randomUUID(),
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: order.orderId,
            description: order.productId,
            amount: {
              currency_code: order.currency,
              value: order.amount.toFixed(2),
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              return_url: `${paymentConfig.baseUrl}/payment/success?orderId=${order.orderId}`,
              cancel_url: `${paymentConfig.baseUrl}/payment/cancel?orderId=${order.orderId}`,
              brand_name: "StyleSelf",
              user_action: "PAY_NOW",
            },
          },
        },
      }),
    });

    const payload = await response.json();
    const approvalLink = payload.links?.find(
      (link) => link.rel === "payer-action" || link.rel === "approve"
    );

    if (!response.ok || !approvalLink?.href) {
      throw new Error(payload.message || "PayPal approval link was not returned");
    }

    return {
      checkoutUrl: approvalLink.href,
      providerOrderId: payload.id,
      raw: payload,
    };
  }

  async verifyWebhook(request) {
    const accessToken = await this.getAccessToken();
    const response = await fetch(`${paymentConfig.paypal.apiBase}/v1/notifications/verify-webhook-signature`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_algo: request.headers["paypal-auth-algo"],
        cert_url: request.headers["paypal-cert-url"],
        transmission_id: request.headers["paypal-transmission-id"],
        transmission_sig: request.headers["paypal-transmission-sig"],
        transmission_time: request.headers["paypal-transmission-time"],
        webhook_id: paymentConfig.paypal.webhookId,
        webhook_event: request.body,
      }),
    });

    const verification = await response.json();
    const resource = request.body?.resource || {};
    const purchaseUnit = resource.purchase_units?.[0] || request.body?.resource?.supplementary_data?.related_ids || {};
    const orderId =
      purchaseUnit.reference_id ||
      resource.invoice_id ||
      resource.custom_id ||
      resource.id ||
      null;

    const eventType = request.body?.event_type || "unknown";
    const paid = eventType === "PAYMENT.CAPTURE.COMPLETED" || eventType === "CHECKOUT.ORDER.COMPLETED";
    const status =
      eventType === "PAYMENT.CAPTURE.DENIED"
        ? "failed"
        : eventType === "CHECKOUT.PAYMENT-APPROVAL.REVERSED"
          ? "cancelled"
          : paid
            ? "paid"
            : "pending";

    return {
      isValid: verification.verification_status === "SUCCESS",
      provider: this.getProviderName(),
      orderId,
      status,
      paid,
      eventType,
      raw: request.body,
      error:
        verification.verification_status === "SUCCESS"
          ? undefined
          : "PayPal webhook verification failed",
    };
  }
}

module.exports = { PayPalProvider };
