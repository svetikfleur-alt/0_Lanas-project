import { getDeliveryProvider } from "@/providers/delivery";
import { getOrder } from "@/services/order-store";
import { DeliveryReceipt, Locale } from "@/types/identity";

export async function prepareTelegramDelivery(
  orderId: string,
  locale: Locale,
): Promise<DeliveryReceipt> {
  const order = getOrder(orderId);

  if (!order || order.status !== "paid") {
    throw new Error("Order is not paid");
  }

  return getDeliveryProvider().deliver({ orderId, locale });
}
