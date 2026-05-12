import QuizFunnel from "./_templates/QuizFunnel";
import quizCopy from "./_data/copy/land-and-home/quiz";

export const metadata = {
  title: quizCopy.meta.title,
  description: quizCopy.meta.description,
};

export default function Page() {
  return <QuizFunnel copy={quizCopy} />;
}
