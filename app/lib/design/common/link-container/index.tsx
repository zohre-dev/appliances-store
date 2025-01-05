import Link from "next/link";
import { FC } from "react";
import { IProps } from "./index.types";

export const LinkContainer: FC<IProps> = ({ href, children, id, classes }) => {
  return (
    <Link id={id} href={href ?? ""} className={classes ?? ""}>
      {children}
    </Link>
  );
};

// className={classes ? classes : ""}
