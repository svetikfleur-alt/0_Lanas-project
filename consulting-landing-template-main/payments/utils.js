const crypto = require("crypto");

function toMinorUnits(amount, currency) {
  const zeroDecimal = new Set(["JPY", "KRW"]);
  return zeroDecimal.has(currency.toUpperCase()) ? Math.round(amount) : Math.round(amount * 100);
}

function createSha1Signature(secretKey, values) {
  const filtered = values.filter((value) => value !== undefined && value !== null && value !== "");
  return crypto.createHash("sha1").update([secretKey, ...filtered].join("|"), "utf8").digest("hex");
}

function createHmacMd5(secretKey, values) {
  return crypto.createHmac("md5", secretKey).update(values.join(";"), "utf8").digest("hex");
}

function createBasicAuth(clientId, clientSecret) {
  return Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
}

module.exports = {
  toMinorUnits,
  createSha1Signature,
  createHmacMd5,
  createBasicAuth,
};
