import { kanit } from "@/app/fonts";

import type { ReactNode, ButtonHTMLAttributes } from "react";

import "./index.css";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "large";
}

export default function Button({
  children = "Get started",
  size = "large",
  className,
  ...attributes
}: Button) {
  return (
    <button
      className={`${kanit.variable} kanit ${
        size === "small" ? "variant-small" : "variant-large"
      } ${className || "interia-button"}`}
      {...attributes}
    >
      {children}
    </button>
  );
}
