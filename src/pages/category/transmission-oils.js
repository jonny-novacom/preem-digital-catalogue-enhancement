import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import TransmissionOilAccordion from "../../components/accordions/TransmissionOilAcc";
import SearchEngineOptimisation from "../../components/SearchEngineOptimisation";

export default function TransmissionOils() {
  return (
    <>
      <SearchEngineOptimisation
        title="Transmissionsoljor"
        image=""
        description="Produkt, applikationer, specifikationer"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto mt-40">
          <StaticImage
            src="../../images/icons/industrial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block w-16 mx-auto mb-4"
          />
          {/* <h3 className="mb-0 text-base font-bold text-center text-preemYellow font-gothamNarrow">
          Produkter applikationer och specifikationer
          </h3> */}
          <h4 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
            Produkt, applikationer, specifikationer
          </h4>
        </div>
        <div className="p-4">
          <TransmissionOilAccordion />
        </div>
      </div>
    </>
  );
}
