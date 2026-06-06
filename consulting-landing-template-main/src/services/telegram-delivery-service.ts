import { getDeliveryProvider } from "@/providers/delivery";
import { DeliveryPayload, DeliveryReceipt } from "@/types/identity";

export async function deliverToTelegram(
  payload: DeliveryPayload,
): Promise<DeliveryReceipt> {
  return getDeliveryProvider().deliver(payload);
}
