import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const PlaceholderImage = () => {
  return (
    <StaticImage
      src="../images/barrel.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Barrel"
      transformOptions={"contain"}
      className="block w-40 p-4 mx-auto mt-4 h-60"
    />
  );
};
export default PlaceholderImage;
