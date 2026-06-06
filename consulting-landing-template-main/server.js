const express = require("express");
const path = require("path");
const { paymentConfig } = require("./payments/config");
const { createHostedCheckout, processWebhook } = require("./payments/service");
const { getProviderByName } = require("./payments/registry");
const { getOrder } = require("./payments/storage");

const app = express();
const rootDir = __dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/config.js", (_req, res) => {
  res.type("application/javascript").send(
    `window.APP_CONFIG = ${JSON.stringify({
      activePaymentProvider: paymentConfig.provider,
      createPaymentEndpoint: "/api/payments/create",
      telegramUrl: paymentConfig.telegramUrl,
    })};`
  );
});

app.post("/api/payments/create", async (req, res) => {
  try {
    const checkout = await createHostedCheckout({
      productId: req.body?.productId || "styleself_full_access",
      customerEmail: req.body?.customerEmail || "",
    });

    return res.json(checkout);
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Failed to create payment session",
    });
  }
});

app.post("/api/payments/webhook/fondy", async (req, res) => {
  const result = await processWebhook("fondy", req);
  if (!result.isValid) {
    return res.status(400).json({ ok: false, error: result.error || "Fondy webhook rejected" });
  }
  return res.json({ ok: true });
});

app.post("/api/payments/webhook/wayforpay", async (req, res) => {
  const result = await processWebhook("wayforpay", req);
  if (!result.isValid) {
    return res.status(400).json({ ok: false, error: result.error || "WayForPay webhook rejected" });
  }

  const provider = getProviderByName("wayforpay");
  return res.json(provider.createAcknowledgement(result.orderId));
});

app.post("/api/payments/webhook/paypal", async (req, res) => {
  const result = await processWebhook("paypal", req);
  if (!result.isValid) {
    return res.status(400).json({ ok: false, error: result.error || "PayPal webhook rejected" });
  }
  return res.json({ ok: true });
});

app.get("/payment/success", (req, res) => {
  void (req.query.orderId ? getOrder(req.query.orderId) : null);
  res.sendFile(path.join(rootDir, "payment-success.html"));
});

app.get("/payment/cancel", (_req, res) => {
  res.sendFile(path.join(rootDir, "payment-cancel.html"));
});

app.use(express.static(rootDir));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(paymentConfig.port, () => {
  console.log(`StyleSelf server running on ${paymentConfig.baseUrl}`);
});
