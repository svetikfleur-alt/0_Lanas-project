import { PageShell } from "@/components/shell";
import { QuizForm } from "@/features/quiz/quiz-form";
import { quizQuestions } from "@/features/quiz/questions";

export default function QuizPage() {
  return (
    <PageShell
      title="Identity questionnaire"
      subtitle="A structured multi-step flow with local answer storage and forward/back navigation."
    >
      <QuizForm questions={quizQuestions} />
    </PageShell>
  );
}
