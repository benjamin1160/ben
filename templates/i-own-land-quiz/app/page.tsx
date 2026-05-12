import QuizFunnel from "./_templates/QuizFunnel";
import quizCopy from "./_data/copy/i-own-land/quiz";

export const metadata = {
  title: quizCopy.meta.title,
  description: quizCopy.meta.description,
};

export default function Page() {
  return <QuizFunnel copy={quizCopy} />;
}
