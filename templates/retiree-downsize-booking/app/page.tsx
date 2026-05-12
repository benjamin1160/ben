import BookingPage from "./_templates/BookingPage";
import copy from "./_data/copy/retiree-downsize";

export const metadata = copy.booking.meta;

export default function Page() {
  return <BookingPage brand={copy.brand} copy={copy.booking} />;
}
