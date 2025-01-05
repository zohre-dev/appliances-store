import React from "react";

export interface IProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  children: React.ReactNode;
}
