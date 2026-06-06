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
  strengths: string[];
  blindSpots: string[];
  visualDirection: string[];
  imageBrief: string;
};

export type ArchetypeContent = {
  key: ArchetypeKey;
  title: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  visualRecommendations: string[];
  businessRecommendations: string[];
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
};

export type GeneratedImage = {
  id: string;
  title: string;
  url: string;
  prompt: string;
};

export type CheckoutSession = {
  orderId: string;
  checkoutUrl: string;
  provider: string;
};

export type DeliveryPayload = {
  orderId: string;
  customerEmail: string;
  archetype: ArchetypeKey;
  imageUrls: string[];
};

export type DeliveryReceipt = {
  channel: string;
  inviteLink: string;
  accessToken: string;
};
