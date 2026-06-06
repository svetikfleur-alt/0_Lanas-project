const { paymentConfig } = require("./config");
const { FondyProvider } = require("./providers/fondy-provider");
const { FlittProvider } = require("./providers/flitt-provider");
const { WayForPayProvider } = require("./providers/wayforpay-provider");
const { PayPalProvider } = require("./providers/paypal-provider");

const providerInstances = {
  fondy: new FondyProvider(),
  flitt: new FlittProvider(),
  wayforpay: new WayForPayProvider(),
  paypal: new PayPalProvider(),
};

function getProviderByName(name) {
  const provider = providerInstances[(name || "").toLowerCase()];
  if (!provider) {
    throw new Error(`Unsupported payment provider: ${name}`);
  }
  return provider;
}

function getActiveProvider() {
  return getProviderByName(paymentConfig.provider);
}

module.exports = {
  getProviderByName,
  getActiveProvider,
};
