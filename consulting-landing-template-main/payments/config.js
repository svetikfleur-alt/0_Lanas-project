const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(process.cwd(), ".env.local") });
dotenv.config();

const port = Number(process.env.PORT || 4242);

const paymentConfig = {
  provider: (process.env.PAYMENT_PROVIDER || "fondy").toLowerCase(),
  baseUrl: process.env.APP_BASE_URL || `http://localhost:${port}`,
  port,
  telegramUrl: "https://t.me/StyleSelf_with_Svetlana",
  products: {
    styleself_full_access: {
      productId: "styleself_full_access",
      name: "StyleSelf — полный доступ",
      description: "Разовый доступ к StyleSelf без подписки.",
      amount: 2999,
      currency: "RUB",
    },
  },
  fondy: {
    merchantId: process.env.FONDY_MERCHANT_ID || "",
    secretKey: process.env.FONDY_SECRET_KEY || "",
    checkoutUrl: "https://pay.fondy.eu/api/checkout/url",
  },
  wayforpay: {
    merchantAccount: process.env.WAYFORPAY_MERCHANT_ACCOUNT || "",
    secretKey: process.env.WAYFORPAY_SECRET_KEY || "",
    apiUrl: "https://api.wayforpay.com/api",
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID || "",
    clientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
    webhookId: process.env.PAYPAL_WEBHOOK_ID || "",
    apiBase: "https://api-m.sandbox.paypal.com",
  },
};

module.exports = { paymentConfig };
