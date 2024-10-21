import { kanit } from "@/app/fonts";

import "./index.css";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="introduction-content">
          <h1>We design your room aesthetic</h1>
          <p>Lectus quam id leo in vitae turpis nisi porta lorem mollis.</p>
        </div>
        <div className={`scroll-down-message kanit ${kanit.variable}`}>Scroll down</div>
      </div>
    </section>
  );
}
