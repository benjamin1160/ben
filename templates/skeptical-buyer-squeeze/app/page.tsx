import SqueezePage from "./_templates/SqueezePage";
import copy from "./_data/copy/skeptical-buyer";

export const metadata = copy.squeeze.meta;

export default function Page() {
  return <SqueezePage brand={copy.brand} copy={copy.squeeze} />;
}
