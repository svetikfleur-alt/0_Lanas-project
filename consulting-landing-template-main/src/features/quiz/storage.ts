"use client";

import { IdentityAnalysis, GeneratedImage, QuizAnswers } from "@/types/identity";

const keys = {
  answers: "vil_answers",
  analysis: "vil_analysis",
  images: "vil_images",
  delivery: "vil_delivery",
};

export function readAnswers(): QuizAnswers {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(keys.answers);
  return raw ? (JSON.parse(raw) as QuizAnswers) : {};
}

export function writeAnswers(answers: QuizAnswers) {
  window.localStorage.setItem(keys.answers, JSON.stringify(answers));
}

export function readAnalysis(): IdentityAnalysis | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(keys.analysis);
  return raw ? (JSON.parse(raw) as IdentityAnalysis) : null;
}

export function writeAnalysis(analysis: IdentityAnalysis) {
  window.localStorage.setItem(keys.analysis, JSON.stringify(analysis));
}

export function readImages(): GeneratedImage[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(keys.images);
  return raw ? (JSON.parse(raw) as GeneratedImage[]) : [];
}

export function writeImages(images: GeneratedImage[]) {
  window.localStorage.setItem(keys.images, JSON.stringify(images));
}

export function writeDelivery(delivery: unknown) {
  window.localStorage.setItem(keys.delivery, JSON.stringify(delivery));
}
