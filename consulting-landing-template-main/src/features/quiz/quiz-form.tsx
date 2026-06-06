"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { QuizQuestion, QuizAnswers } from "@/types/identity";

import { readAnswers, writeAnswers, writeAnalysis } from "./storage";

export function QuizForm({ questions }: { questions: QuizQuestion[] }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const currentQuestion = questions[step];

  useEffect(() => {
    setAnswers(readAnswers());
  }, []);

  const selected = answers[currentQuestion.id];

  const onSelect = (value: string) => {
    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);
    writeAnswers(nextAnswers);
  };

  const onNext = async () => {
    if (!selected) {
      return;
    }

    if (step < questions.length - 1) {
      setStep((value) => value + 1);
      return;
    }

    const response = await fetch("/api/analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });

    const analysis = await response.json();
    writeAnalysis(analysis);
    router.push("/result");
  };

  return (
    <div className="grid gap-8 rounded-[32px] bg-white p-8 shadow-card">
      <div className="flex items-center justify-between text-sm text-ink/60">
        <span>
          Step {step + 1} / {questions.length}
        </span>
        <span>{currentQuestion.category}</span>
      </div>

      <div>
        <h2 className="font-serif text-3xl">{currentQuestion.prompt}</h2>
      </div>

      <div className="grid gap-3">
        {currentQuestion.options.map((option) => {
          const isActive = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`rounded-2xl border px-5 py-4 text-left transition ${
                isActive
                  ? "border-copper bg-copper text-white"
                  : "border-ink/10 bg-sand hover:border-copper/40"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          className="rounded-full border border-ink/10 px-5 py-3"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-ink px-5 py-3 text-white disabled:opacity-50"
          disabled={!selected}
        >
          {step === questions.length - 1 ? "Analyze identity" : "Next"}
        </button>
      </div>
    </div>
  );
}
