import { Order, OrderStatus } from "@/types/identity";

const orderStore = new Map<string, Order>();

export function saveOrder(order: Order): Order {
  orderStore.set(order.orderId, order);
  return order;
}

export function getOrder(orderId: string): Order | undefined {
  return orderStore.get(orderId);
}

export function updateOrderStatus(orderId: string, status: OrderStatus): Order | undefined {
  const order = orderStore.get(orderId);

  if (!order) {
    return undefined;
  }

  const nextOrder: Order = {
    ...order,
    status,
    paidAt: status === "paid" ? new Date().toISOString() : order.paidAt,
  };

  orderStore.set(orderId, nextOrder);
  return nextOrder;
}
