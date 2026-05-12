import BookingPage from "./_templates/BookingPage";
import copy from "./_data/copy/family-home";

export const metadata = copy.booking.meta;

export default function Page() {
  return <BookingPage brand={copy.brand} copy={copy.booking} />;
}
