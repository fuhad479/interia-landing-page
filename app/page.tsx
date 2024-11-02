import { Fragment } from "react";

import Introduction from "@/app/components/introduction";
import AboutUs from "./components/about-us";

export default function Page() {
  return (
    <Fragment>
      <Introduction />
      <AboutUs />
    </Fragment>
  );
}
