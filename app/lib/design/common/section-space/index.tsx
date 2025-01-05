import { FC } from "react";
import { Iprops } from "./index.types";
import { cn } from "@/app/lib/utils/cn";

export const SectionSpace: FC<Iprops> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "conatiner mx-auto mt-4 border-2 border-red-500",
        className
      )}
    >
      {children}
    </section>
  );
};
