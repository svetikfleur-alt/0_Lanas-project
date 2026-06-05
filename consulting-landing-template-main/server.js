const express = require("express");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();
const rootDir = __dirname;
const publicDir = rootDir;
const port = Number(process.env.PORT || 4242);
const baseUrl = process.env.APP_BASE_URL || `http://localhost:${port}`;
const telegramUrl = "https://t.me/StyleSelf_with_Svetlana";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const secretKey = process.env.STRIPE_SECRET_KEY || "";
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

const stripe = secretKey ? new Stripe(secretKey) : null;
const checkoutConfig = {
  currency: "rub",
  unitAmount: 299900,
  productName: "StyleSelf — полный доступ",
  productDescription: "Разовый доступ к StyleSelf без подписки.",
};

app.post("/api/stripe-webhook", express.raw({ type: "application/json" }), (req, res) => {
  if (!stripe || !webhookSecret) {
    return res.status(503).json({ error: "Webhook not configured" });
  }

  const signature = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const logLine = JSON.stringify({
      receivedAt: new Date().toISOString(),
      type: event.type,
      sessionId: session.id,
      customerEmail: session.customer_details?.email || null,
      amountTotal: session.amount_total || null,
      currency: session.currency || null,
      telegramUrl,
    });

    fs.appendFileSync(path.join(rootDir, "payments.log"), `${logLine}\n`);
  }

  return res.json({ received: true });
});

app.use(express.json());

app.get("/config.js", (_req, res) => {
  res.type("application/javascript").send(
    `window.APP_CONFIG = ${JSON.stringify({
      stripePublishableKey: publishableKey,
      checkoutEndpoint: "/api/create-checkout-session",
      telegramUrl,
    })};`
  );
});

app.post("/api/create-checkout-session", async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: "STRIPE_SECRET_KEY is not configured" });
  }

  if (!publishableKey) {
    return res.status(500).json({ error: "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured" });
  }

  try {
    const origin = req.body?.origin || baseUrl;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      line_items: [
        {
          price_data: {
            currency: checkoutConfig.currency,
            unit_amount: checkoutConfig.unitAmount,
            product_data: {
              name: checkoutConfig.productName,
              description: checkoutConfig.productDescription,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        product: "styleself_full_access",
      },
    });

    return res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Failed to create checkout session" });
  }
});

app.get("/success", (_req, res) => {
  res.sendFile(path.join(rootDir, "success.html"));
});

app.get("/cancel", (_req, res) => {
  res.sendFile(path.join(rootDir, "cancel.html"));
});

app.use(express.static(publicDir));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(port, () => {
  console.log(`StyleSelf server running on ${baseUrl}`);
});
