/**
 * @typedef {"pending" | "paid" | "failed" | "cancelled"} OrderStatus
 *
 * @typedef {Object} Order
 * @property {string} orderId
 * @property {string} productId
 * @property {number} amount
 * @property {string} currency
 * @property {string} customerEmail
 * @property {string} provider
 * @property {OrderStatus} status
 * @property {string} createdAt
 * @property {string | null} paidAt
 * @property {Record<string, string | number | boolean | null | undefined>=} meta
 *
 * @typedef {Object} CheckoutSession
 * @property {string} checkoutUrl
 * @property {string} providerOrderId
 * @property {Record<string, unknown>=} raw
 *
 * @typedef {Object} VerifiedWebhook
 * @property {boolean} isValid
 * @property {string} provider
 * @property {string | null} orderId
 * @property {OrderStatus | null} status
 * @property {boolean=} paid
 * @property {string=} eventType
 * @property {Record<string, unknown>=} raw
 * @property {string=} error
 *
 * @typedef {Object} PaymentProvider
 * @property {() => string} getProviderName
 * @property {(order: Order) => Promise<CheckoutSession>} createCheckoutSession
 * @property {(request: import("express").Request) => Promise<VerifiedWebhook>} verifyWebhook
 */

module.exports = {};
