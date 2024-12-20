import { kanit } from "@/app/fonts";

import Image from "next/image";
import Button from "@/components/button";
import SectionTitle from "@/components/section-title";

// import galleryOne from "@/public/gallery-one.jpg";
// import galleryTwo from "@/public/gallery-two.jpg";
// import galleryThree from "@/public/gallery-three.jpg";

import "./index.css";

export default function Teams() {
  return (
    <section className="teams-wrapper">
      <div className="container">
        <div className="teams">
          <div className="teams-content">
            <SectionTitle
              subtitle="Teams"
              title="Projects are handled by professional certified teams"
              description="Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing."
            />
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div className="stars">
              {[...new Array(5)].map((star, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              ))}
              <span>(5 reviews)</span>
            </div>
            <div className={`${kanit} kanit subtitle`}>Trusted by customer</div>
          </div>
          <div className="teams-gallery">
            <div className="gallery">
              {/* <Image src={galleryOne} alt="Team gallery one" /> */}
            </div>
            <div className="gallery">
              {/* <Image src={galleryTwo} alt="Team gallery one" /> */}
            </div>
            <div className="gallery">
              <Button>Learn Teams</Button>
            </div>
            <div className="gallery">
              {/* <Image src={galleryThree} alt="Team gallery one" /> */}
            </div>
          </div>
        </div>
        <div className="brands">
          <div className="brand">
            <Image src="" alt="Brand" width={255} height={98} />
          </div>
          <div className="brand">
            <Image src="" alt="Brand" width={255} height={98} />
          </div>
          <div className="brand">
            <Image src="" alt="Brand" width={255} height={98} />
          </div>
          <div className="brand">
            <Image src="" alt="Brand" width={255} height={98} />
          </div>
        </div>
      </div>
    </section>
  );
}
