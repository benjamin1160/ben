import BridgePage from "../../_templates/BridgePage";
import copy from "../../_data/copy/first-generation";

export const metadata = copy.bridge.meta;

export default function Page() {
  return <BridgePage brand={copy.brand} copy={copy.bridge} />;
}
