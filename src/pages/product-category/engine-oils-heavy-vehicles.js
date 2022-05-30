import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import CommercialAccordion from "../../components/accordions/CommercialAcc";

export default function EngineOilsHeavyVehicles() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto mt-40">
          <StaticImage
            src="../../images/icons/commercial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block w-20 mx-auto mb-4"
          />
          <h3 className="mb-0 text-base font-bold text-center text-preemYellow font-gothamNarrow">
            Motoroljor personbilar och lätta transportfordon
          </h3>
          <h4 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
            Produkt, applikationer, specifikationer
          </h4>
        </div>
        <div className="p-4">
          <CommercialAccordion />
        </div>
      </div>
    </>
  );
}
