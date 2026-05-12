import VslPage from "./_templates/VslPage";
import copy from "./_data/copy/retiree-downsize";

export const metadata = copy.vsl.meta;

export default function Page() {
  return <VslPage brand={copy.brand} copy={copy.vsl} />;
}
