import { Fragment } from "react";

import Introduction from "@/app/components/introduction";
import AboutUs from "@/app/components/about-us";
import HireNow from '@/app/components/hire-now';
import Teams from "@/app/components/teams";

export default function Page() {
  return (
    <Fragment>
      <Introduction />
      <AboutUs />
      <HireNow />
      <Teams />
    </Fragment>
  );
}
