import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Loading() {
  return (
    <>
      <StaticImage
        src="../images/barrel.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Barrel"
        className="block max-w-full p-4 mx-auto mt-4 h-60 w-max"
      />
    </>
  );
}
