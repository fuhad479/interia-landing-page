import { kanit } from "@/app/fonts";

import Button from "@/components/button";

import "./index.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">About</span>
          <h2>We are the best interior design studio in london</h2>
          <p>
            Posuere urna nec tincidunt praesent. Egestas maecenas pharetra
            convallis posuere. Ipsum nunc aliquet bibendum enim. Sem integer
            vitae justo eget magna fermentum iaculis eu non.
          </p>
        </div>
        <div className="interia-gallery">
          <div className="gallery">
            <div className="overview">
              <div className="counting">2k+</div>
              <div className={`overview-title ${kanit} kanit`}>
                Projects <br /> done
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="overview">
              <div className="counting">20+</div>
              <div className={`overview-title ${kanit} kanit`}>
                Pro <br /> teams
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="overview">
              <div className="counting">2k+</div>
              <div className={`overview-title ${kanit} kanit`}>
                Global <br /> clients
              </div>
            </div>
          </div>
        </div>
        <div className="overviews">
          <div className="overview">
            <div className="counting">2k+</div>
            <div className={`overview-title ${kanit} kanit`}>
              Projects <br /> done
            </div>
          </div>
          <div className="overview">
            <div className="counting">20+</div>
            <div className={`overview-title ${kanit} kanit`}>
              Pro <br /> teams
            </div>
          </div>
          <div className="overview">
            <div className="counting">2k+</div>
            <div className={`overview-title ${kanit} kanit`}>
              Global <br /> clients
            </div>
          </div>
        </div>
        <div className="about-us-action">
          <Button>Learn more</Button>
        </div>
      </div>
    </section>
  );
}
