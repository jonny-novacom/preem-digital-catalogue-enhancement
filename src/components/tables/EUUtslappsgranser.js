import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function EUUtslappsgranser() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          Euro utsläppsgränser tunga fordon
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          Euro har skärpt kraven på emissioner av NO<sub>x</sub> (kväveoxider)
          och partiklar (sot) från tunga fordon undan för undan. En bil med en
          Euro I motor släpper ut lika mycket partiklar som 36 bilar med Euro
          VI-motorer.
        </p>
        <div className="container max-w-2xl mx-auto my-4">
          <StaticImage
            src="../../images/eu-utslappsgranser.png"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Euro utsläppsgränser tunga fordon"
            transformOptions={"cover"}
            className="block mx-auto"
          />
        </div>
      </div>
    </>
  );
}
