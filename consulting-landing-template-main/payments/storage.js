const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ordersPath = path.join(process.cwd(), "orders.json");

function readOrders() {
  try {
    return JSON.parse(fs.readFileSync(ordersPath, "utf8"));
  } catch (_error) {
    return [];
  }
}

function writeOrders(orders) {
  fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2));
}

function createOrderId() {
  return `ord_${crypto.randomBytes(8).toString("hex")}`;
}

function createOrder(orderInput) {
  const orders = readOrders();
  const order = {
    orderId: createOrderId(),
    productId: orderInput.productId,
    amount: orderInput.amount,
    currency: orderInput.currency,
    customerEmail: orderInput.customerEmail || "",
    provider: orderInput.provider,
    status: "pending",
    createdAt: new Date().toISOString(),
    paidAt: null,
    meta: orderInput.meta || {},
  };

  orders.push(order);
  writeOrders(orders);
  return order;
}

function updateOrder(orderId, updates) {
  const orders = readOrders();
  const nextOrders = orders.map((order) => {
    if (order.orderId !== orderId) return order;
    return {
      ...order,
      ...updates,
      paidAt: updates.status === "paid" ? updates.paidAt || new Date().toISOString() : order.paidAt,
      meta: {
        ...(order.meta || {}),
        ...(updates.meta || {}),
      },
    };
  });

  writeOrders(nextOrders);
  return nextOrders.find((order) => order.orderId === orderId) || null;
}

function getOrder(orderId) {
  return readOrders().find((order) => order.orderId === orderId) || null;
}

function findOrderByMeta(key, value) {
  return readOrders().find((order) => order.meta && order.meta[key] === value) || null;
}

// TODO: Replace this file-based storage with Supabase/PostgreSQL when persistent shared storage is required.
module.exports = {
  createOrder,
  updateOrder,
  getOrder,
  findOrderByMeta,
};
