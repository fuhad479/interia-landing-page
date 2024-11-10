import { Fragment } from "react";

import Introduction from "@/app/components/introduction";
import AboutUs from "@/app/components/about-us";
import HireNow from '@/app/components/hire-now';

export default function Page() {
  return (
    <Fragment>
      <Introduction />
      <AboutUs />
      <HireNow />
    </Fragment>
  );
}
