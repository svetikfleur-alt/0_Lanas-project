import { Dictionary } from "@/i18n/dictionaries";
import { QuizQuestion } from "@/types/identity";

type QuestionDefinition = {
  id: string;
  categoryKey: keyof Dictionary["quiz"]["categories"];
  promptKey: keyof Dictionary["quiz"]["questions"];
  options: Array<{
    value: string;
    labelKey: string;
  }>;
};

const questionDefinitions: QuestionDefinition[] = [
  {
    id: "identity",
    categoryKey: "identity",
    promptKey: "identity",
    options: [
      { value: "authority", labelKey: "authority" },
      { value: "warm", labelKey: "warm" },
      { value: "curiosity", labelKey: "curiosity" },
    ],
  },
  {
    id: "aspiration",
    categoryKey: "aspiration",
    promptKey: "aspiration",
    options: [
      { value: "premium", labelKey: "premium" },
      { value: "guide", labelKey: "guide" },
      { value: "experimental", labelKey: "experimental" },
    ],
  },
  {
    id: "visual_preference",
    categoryKey: "visual",
    promptKey: "visual_preference",
    options: [
      { value: "elegant", labelKey: "elegant" },
      { value: "minimal", labelKey: "minimal" },
      { value: "bold", labelKey: "bold" },
    ],
  },
  {
    id: "business_context",
    categoryKey: "business",
    promptKey: "business_context",
    options: [
      { value: "expert", labelKey: "expert" },
      { value: "coach", labelKey: "coach" },
      { value: "creative", labelKey: "creative" },
    ],
  },
  {
    id: "audience_impact",
    categoryKey: "audience",
    promptKey: "audience_impact",
    options: [
      { value: "trust", labelKey: "trust" },
      { value: "desire", labelKey: "desire" },
      { value: "inspiration", labelKey: "inspiration" },
    ],
  },
];

export function getQuizQuestions(dictionary: Dictionary): QuizQuestion[] {
  return questionDefinitions.map((definition) => ({
    id: definition.id,
    category: dictionary.quiz.categories[definition.categoryKey],
    prompt: dictionary.quiz.questions[definition.promptKey],
    options: definition.options.map((option) => ({
      value: option.value,
      label: dictionary.quiz.options[option.labelKey as keyof Dictionary["quiz"]["options"]],
    })),
  }));
}
