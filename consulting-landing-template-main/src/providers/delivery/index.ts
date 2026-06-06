import { TelegramDeliveryProvider } from "./telegram-delivery-provider";
import { DeliveryProvider } from "./types";

export function getDeliveryProvider(): DeliveryProvider {
  return new TelegramDeliveryProvider();
}
