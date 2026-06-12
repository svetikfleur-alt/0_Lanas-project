import { DeliveryPayload, DeliveryReceipt } from "@/types/identity";

export interface DeliveryProvider {
  deliver(payload: DeliveryPayload): Promise<DeliveryReceipt>;
  getProviderName(): string;
}
