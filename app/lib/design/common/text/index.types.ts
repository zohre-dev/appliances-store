import React from "react";

export interface IProps {
  as?: "p" | "div" | "span";
  textSize?: "xs" | "sm" | "md" | "lg" | "xl";
  fontWeight?: "normal" | "bold" | "semibold";
  className?: string;
  children: React.ReactNode;
}
