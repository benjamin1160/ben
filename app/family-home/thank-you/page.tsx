import ThankYouPage from "../../_templates/ThankYouPage";
import copy from "../../_data/copy/family-home";

export const metadata = copy.thankYou.meta;

export default function Page() {
  return <ThankYouPage brand={copy.brand} copy={copy.thankYou} />;
}
