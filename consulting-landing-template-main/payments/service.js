const { paymentConfig } = require("./config");
const { getActiveProvider, getProviderByName } = require("./registry");
const { createOrder, updateOrder, getOrder, findOrderByMeta } = require("./storage");

function resolveProduct(productId) {
  const product = paymentConfig.products[productId];
  if (!product) {
    throw new Error(`Unknown product: ${productId}`);
  }
  return product;
}

async function createHostedCheckout(payload) {
  const product = resolveProduct(payload.productId || "styleself_full_access");
  const provider = getActiveProvider();

  const order = createOrder({
    productId: product.productId,
    amount: product.amount,
    currency: product.currency,
    customerEmail: payload.customerEmail || "",
    provider: provider.getProviderName(),
  });

  const session = await provider.createCheckoutSession(order);
  updateOrder(order.orderId, {
    meta: {
      providerOrderId: session.providerOrderId,
      checkoutUrl: session.checkoutUrl,
    },
  });

  return {
    orderId: order.orderId,
    provider: provider.getProviderName(),
    checkoutUrl: session.checkoutUrl,
  };
}

async function processWebhook(providerName, request) {
  const provider = getProviderByName(providerName);
  const result = await provider.verifyWebhook(request);
  if (!result.isValid || !result.orderId) {
    return result;
  }

  let order = getOrder(result.orderId);
  if (!order) {
    order = findOrderByMeta("providerOrderId", result.orderId);
  }

  if (!order) {
    return {
      ...result,
      isValid: false,
      error: "Order not found for webhook payload",
    };
  }

  updateOrder(order.orderId, {
    status: result.status || order.status,
    paidAt: result.paid ? new Date().toISOString() : order.paidAt,
    meta: {
      lastWebhookEvent: result.eventType || "",
    },
  });

  return {
    ...result,
    orderId: order.orderId,
  };
}

module.exports = {
  createHostedCheckout,
  processWebhook,
};
