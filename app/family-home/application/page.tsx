import ApplicationPage from "../../_templates/ApplicationPage";
import copy from "../../_data/copy/family-home";

export const metadata = copy.application.meta;

export default function Page() {
  return <ApplicationPage brand={copy.brand} copy={copy.application} />;
}
