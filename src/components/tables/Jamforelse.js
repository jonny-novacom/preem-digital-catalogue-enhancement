import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Jamforelse() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          Jämförelse viskositetsklassificeringar (SAE – ISO VG)
        </h3>
        <div className="container max-w-2xl mx-auto my-4 ">
          <StaticImage
            src="../../images/jamforelse.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Jämförelse viskositetsklassificeringar (SAE – ISO VG)"
            transformOptions={"cover"}
            className="block mx-auto"
          />
        </div>
      </div>
    </>
  );
}
