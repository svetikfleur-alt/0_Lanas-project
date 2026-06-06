import { QuizQuestion } from "@/types/identity";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "identity",
    category: "Identity",
    prompt: "Who do you feel you are right now?",
    options: [
      { value: "visionary", label: "Visionary leader" },
      { value: "guide", label: "Calm guide" },
      { value: "artist", label: "Creative soul" },
      { value: "strategist", label: "Structured strategist" },
    ],
  },
  {
    id: "aspirationalIdentity",
    category: "Aspirational Identity",
    prompt: "Who do you want to become next?",
    options: [
      { value: "queen", label: "Visible authority" },
      { value: "mentor", label: "Trusted expert" },
      { value: "creator", label: "Magnetic creator" },
      { value: "connector", label: "Warm community builder" },
    ],
  },
  {
    id: "visualPreferences",
    category: "Visual Preferences",
    prompt: "What visual energy feels closest to you?",
    options: [
      { value: "royal", label: "Royal" },
      { value: "creative", label: "Creative" },
      { value: "elegant", label: "Elegant" },
      { value: "minimal", label: "Minimal" },
      { value: "powerful", label: "Powerful" },
      { value: "warm", label: "Warm" },
    ],
  },
  {
    id: "business",
    category: "Business",
    prompt: "Which role best matches your business context?",
    options: [
      { value: "personal", label: "Personal brand" },
      { value: "expert", label: "Expert" },
      { value: "coach", label: "Coach" },
      { value: "entrepreneur", label: "Entrepreneur" },
      { value: "creator", label: "Creator" },
    ],
  },
  {
    id: "audienceImpact",
    category: "Audience Impact",
    prompt: "What should people feel first when they see you?",
    options: [
      { value: "trust", label: "Trust" },
      { value: "authority", label: "Authority" },
      { value: "connection", label: "Connection" },
      { value: "curiosity", label: "Curiosity" },
      { value: "inspiration", label: "Inspiration" },
    ],
  },
];
