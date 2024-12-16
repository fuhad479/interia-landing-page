import { Fragment } from "react";

import Introduction from "@/app/components/introduction";
import AboutUs from "@/app/components/about-us";
import HireNow from '@/app/components/hire-now';
import Teams from "@/app/components/teams";
import Gallery from "@/app/components/gallery";
import Articles from "@/app/components/articles";
import Newsletter from "@/app/components/newsletter";

export default function Page() {
  return (
    <Fragment>
      <Introduction />
      <AboutUs />
      <HireNow />
      <Teams />
      <Gallery />
      <Articles />
      <Newsletter />
    </Fragment>
  );
}
