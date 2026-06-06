const { paymentConfig } = require("../config");
const { createSha1Signature, toMinorUnits } = require("../utils");

class FondyProvider {
  getProviderName() {
    return "fondy";
  }

  async createCheckoutSession(order) {
    if (!paymentConfig.fondy.merchantId || !paymentConfig.fondy.secretKey) {
      throw new Error("Fondy credentials are not configured");
    }

    const amount = toMinorUnits(order.amount, order.currency);
    const request = {
      merchant_id: paymentConfig.fondy.merchantId,
      order_id: order.orderId,
      order_desc: order.productId,
      amount,
      currency: order.currency,
      response_url: `${paymentConfig.baseUrl}/payment/success?orderId=${order.orderId}`,
      server_callback_url: `${paymentConfig.baseUrl}/api/payments/webhook/fondy`,
      merchant_data: JSON.stringify({
        orderId: order.orderId,
        customerEmail: order.customerEmail,
      }),
    };

    request.signature = createSha1Signature(paymentConfig.fondy.secretKey, [
      request.merchant_id,
      request.order_id,
      request.amount,
      request.currency,
      request.order_desc,
    ]);

    const response = await fetch(paymentConfig.fondy.checkoutUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ request }),
    });

    const payload = await response.json();
    const result = payload.response || {};
    if (!response.ok || !result.checkout_url) {
      throw new Error(result.error_message || "Fondy checkout URL was not returned");
    }

    return {
      checkoutUrl: result.checkout_url,
      providerOrderId: result.payment_id || order.orderId,
      raw: payload,
    };
  }

  async verifyWebhook(request) {
    const payload = request.body || {};
    const orderId = payload.order_id || null;

    if (!payload.signature || !orderId) {
      return {
        isValid: false,
        provider: this.getProviderName(),
        orderId,
        status: null,
        error: "Missing Fondy webhook signature or order_id",
        raw: payload,
      };
    }

    const expectedSignature = createSha1Signature(paymentConfig.fondy.secretKey, [
      payload.merchant_id,
      payload.order_id,
      payload.amount,
      payload.currency,
      payload.order_desc,
      payload.response_status,
    ]);

    const paid = payload.order_status === "approved" || payload.order_status === "processing";
    const status = paid
      ? "paid"
      : payload.order_status === "declined"
        ? "failed"
        : payload.order_status === "reversed"
          ? "cancelled"
          : "pending";

    return {
      isValid: expectedSignature === payload.signature,
      provider: this.getProviderName(),
      orderId,
      status,
      paid,
      eventType: payload.order_status || "unknown",
      raw: payload,
      error: expectedSignature === payload.signature ? undefined : "Fondy webhook signature mismatch",
    };
  }
}

module.exports = { FondyProvider };
