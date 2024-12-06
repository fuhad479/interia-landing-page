import { kanit } from "@/app/fonts";

import "./index.css";

export default function SectionTitle({
  subtitle = "",
  title,
  description = "",
}: SectionTitle) {
  return (
    <div className="section-title">
      {subtitle && <span className={`${kanit} kanit`}>{subtitle}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

interface SectionTitle {
  title: string;
  description?: string;
  subtitle?: string;
}
