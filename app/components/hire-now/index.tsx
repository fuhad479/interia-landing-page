import Button from "@/components/button";

import "./index.css";

export default function HireNow() {
  return (
    <section className="hire-now-wrapper">
      <div className="container">
        <div className="hire-now">
          <div className="image"></div>
          <div className="content">
            <h2>Blending creativity and functionality in every design</h2>
            <Button>Hire use now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
