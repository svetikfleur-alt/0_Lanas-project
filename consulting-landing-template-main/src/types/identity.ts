export const locales = ["ru", "uk", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export type ArchetypeKey = "queen" | "mentor" | "creator";

export type QuizQuestionOption = {
  value: string;
  label: string;
};

export type QuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: QuizQuestionOption[];
};

export type QuizAnswers = Record<string, string>;

export type IdentityAnalysis = {
  archetype: ArchetypeKey;
  title: string;
  summary: string;
  strengths: string[];
  blindSpots: string[];
  visualDirection: string;
  businessDirection: string;
  imageBrief: string;
};

export type ArchetypeContent = {
  key: ArchetypeKey;
  title: string;
  description: string;
  strengths: string[];
  blindSpots: string[];
  visualRecommendations: string[];
  businessRecommendations: string[];
  promptIdeas: string[];
};

export type PromptCompilerOutput = {
  subject: string;
  style: string;
  clothing: string;
  environment: string;
  lighting: string;
  emotion: string;
  composition: string;
  fullPrompt: string;
  negativePrompt?: string;
};

export type GeneratedImage = {
  id: string;
  title: string;
  url: string;
  prompt: string;
};

export type OrderStatus = "pending" | "paid" | "failed" | "cancelled";

export type Order = {
  orderId: string;
  productId: string;
  amount: number;
  currency: string;
  customerEmail?: string;
  provider: string;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
  locale: Locale;
};

export type CheckoutSession = {
  orderId: string;
  checkoutUrl: string;
  provider: string;
};

export type DeliveryPayload = {
  orderId: string;
  locale: Locale;
};

export type DeliveryReceipt = {
  channel: string;
  inviteLink?: string;
  accessToken?: string;
  message: string;
};
