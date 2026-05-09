import SqueezePage from "../../_templates/SqueezePage";
import copy from "../../_data/copy/land-and-home";

export const metadata = copy.squeeze.meta;

export default function Page() {
  return <SqueezePage brand={copy.brand} copy={copy.squeeze} />;
}
