import HybridPage from "../../_templates/HybridPage";
import copy from "../../_data/copy/investor";

export const metadata = copy.hybrid.meta;

export default function Page() {
  return <HybridPage brand={copy.brand} copy={copy.hybrid} />;
}
