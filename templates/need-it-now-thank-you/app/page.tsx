import ThankYouPage from "./_templates/ThankYouPage";
import copy from "./_data/copy/need-it-now";

export const metadata = copy.thankYou.meta;

export default function Page() {
  return <ThankYouPage brand={copy.brand} copy={copy.thankYou} />;
}
