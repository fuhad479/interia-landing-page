import Button from "@/components/button";

import "./index.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          {/* <h2>Newsletter</h2> */}
          <input type="text" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
