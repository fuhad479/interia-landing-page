import { kanit } from "@/app/fonts";

import SectionTitle from "@/components/section-title";
import Image from "next/image";

import "./index.css";

export default function Articles() {
  return (
    <section className="news-articles">
      <div className="container">
        <SectionTitle subtitle="Blog" title="The latest article" />
        <div className="articles">
          {[...new Array(3)].map((_, index) => (
            <article key={index} className="article">
              <Image src="" alt="Article One" width={100} height={100} />
              <div className="article-content">
                <p>Posuere urna nec tincidunt praesent egestas maecenas.</p>
                <button type="button" className={`${kanit} kanit`}>
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
