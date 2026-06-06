const { paymentConfig } = require("../config");
const { createHmacMd5 } = require("../utils");

class WayForPayProvider {
  getProviderName() {
    return "wayforpay";
  }

  async createCheckoutSession(order) {
    if (!paymentConfig.wayforpay.merchantAccount || !paymentConfig.wayforpay.secretKey) {
      throw new Error("WayForPay credentials are not configured");
    }

    const orderDate = Math.floor(Date.now() / 1000);
    const payload = {
      transactionType: "CREATE_INVOICE",
      merchantAccount: paymentConfig.wayforpay.merchantAccount,
      merchantAuthType: "simpleSignature",
      apiVersion: 1,
      language: "EN",
      merchantDomainName: new URL(paymentConfig.baseUrl).hostname,
      serviceUrl: `${paymentConfig.baseUrl}/api/payments/webhook/wayforpay`,
      orderReference: order.orderId,
      orderDate,
      amount: Number(order.amount.toFixed(2)),
      currency: order.currency,
      productName: [order.productId],
      productCount: [1],
      productPrice: [Number(order.amount.toFixed(2))],
      clientEmail: order.customerEmail || undefined,
      returnUrl: `${paymentConfig.baseUrl}/payment/success?orderId=${order.orderId}`,
    };

    payload.merchantSignature = createHmacMd5(paymentConfig.wayforpay.secretKey, [
      payload.merchantAccount,
      payload.merchantDomainName,
      payload.orderReference,
      String(payload.orderDate),
      String(payload.amount),
      payload.currency,
      ...payload.productName,
      ...payload.productCount.map(String),
      ...payload.productPrice.map(String),
    ]);

    const response = await fetch(paymentConfig.wayforpay.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok || !result.invoiceUrl) {
      throw new Error(result.reason || "WayForPay invoice URL was not returned");
    }

    return {
      checkoutUrl: result.invoiceUrl,
      providerOrderId: result.orderReference || order.orderId,
      raw: result,
    };
  }

  async verifyWebhook(request) {
    const payload = request.body || {};
    const orderId = payload.orderReference || null;

    if (!payload.merchantSignature || !orderId) {
      return {
        isValid: false,
        provider: this.getProviderName(),
        orderId,
        status: null,
        error: "Missing WayForPay webhook signature or orderReference",
        raw: payload,
      };
    }

    const expectedSignature = createHmacMd5(paymentConfig.wayforpay.secretKey, [
      payload.merchantAccount,
      payload.orderReference,
      String(payload.amount),
      payload.currency,
      payload.authCode || "",
      payload.cardPan || "",
      payload.transactionStatus || "",
      String(payload.reasonCode || ""),
    ]);

    const paid = payload.transactionStatus === "Approved";
    const status = paid
      ? "paid"
      : payload.transactionStatus === "Declined"
        ? "failed"
        : payload.transactionStatus === "Expired"
          ? "cancelled"
          : "pending";

    return {
      isValid: expectedSignature === payload.merchantSignature,
      provider: this.getProviderName(),
      orderId,
      status,
      paid,
      eventType: payload.transactionStatus || "unknown",
      raw: payload,
      error:
        expectedSignature === payload.merchantSignature
          ? undefined
          : "WayForPay webhook signature mismatch",
    };
  }

  createAcknowledgement(orderId) {
    const time = Math.floor(Date.now() / 1000);
    return {
      orderReference: orderId,
      status: "accept",
      time,
      signature: createHmacMd5(paymentConfig.wayforpay.secretKey, [orderId, "accept", String(time)]),
    };
  }
}

module.exports = { WayForPayProvider };
