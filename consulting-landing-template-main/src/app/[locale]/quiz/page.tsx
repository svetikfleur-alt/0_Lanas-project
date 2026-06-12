import { PageShell } from "@/components/shell";
import { QuizForm } from "@/features/quiz/quiz-form";
import { getQuizQuestions } from "@/features/quiz/questions";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/types/identity";

export default function QuizPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <PageShell
      dictionary={dictionary}
      locale={params.locale}
      title={dictionary.quiz.title}
      subtitle={dictionary.quiz.subtitle}
    >
      <QuizForm
        locale={params.locale}
        questions={getQuizQuestions(dictionary)}
        labels={{
          back: dictionary.common.back,
          next: dictionary.common.next,
          submit: dictionary.quiz.submit,
          step: dictionary.quiz.step,
          of: dictionary.quiz.of,
        }}
      />
    </PageShell>
  );
}
