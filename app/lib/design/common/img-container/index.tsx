"use client";

import Image from "next/image";
import { FC } from "react";
import { IProps, PartialLoadImageProps } from "./index.types";
import { getBlurDataUrl } from "@/app/lib/utils/get-blur-data-url";

export const loadImageFun = ({
  src,
  quality,
  width,
}: PartialLoadImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
export const ImgContainer: FC<IProps> = ({ classes, src }) => {
  return (
    <div
      className={`relative ${classes}`}
      style={{ border: "2px solid yellow" }}
    >
      <Image
        src={src}
        loader={loadImageFun}
        alt="image"
        fill
        placeholder="blur"
        blurDataURL={getBlurDataUrl()}
        loading="lazy"
        className={classes}
        sizes="(max-width: 1200px) 100vw"
      />
    </div>
  );
};
