import { GeneratedImage, IdentityAnalysis, PromptCompilerOutput, QuizAnswers } from "@/types/identity";

type FlowState = {
  answers?: QuizAnswers;
  analysis?: IdentityAnalysis;
  prompt?: PromptCompilerOutput;
  image?: GeneratedImage;
  orderId?: string;
};

const storageKey = "vil_flow_state";

function readState(): FlowState {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(storageKey);

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as FlowState;
  } catch {
    return {};
  }
}

function writeState(nextState: FlowState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify(nextState));
}

export function readAnswers(): QuizAnswers {
  return readState().answers ?? {};
}

export function writeAnswers(answers: QuizAnswers) {
  writeState({ ...readState(), answers });
}

export function readAnalysis(): IdentityAnalysis | null {
  return readState().analysis ?? null;
}

export function writeAnalysis(analysis: IdentityAnalysis) {
  writeState({ ...readState(), analysis });
}

export function readPrompt(): PromptCompilerOutput | null {
  return readState().prompt ?? null;
}

export function writePrompt(prompt: PromptCompilerOutput) {
  writeState({ ...readState(), prompt });
}

export function readImage(): GeneratedImage | null {
  return readState().image ?? null;
}

export function writeImage(image: GeneratedImage) {
  writeState({ ...readState(), image });
}

export function readOrderId(): string | null {
  return readState().orderId ?? null;
}

export function writeOrderId(orderId: string) {
  writeState({ ...readState(), orderId });
}
