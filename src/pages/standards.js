import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import SpecSheetDelo from "../components/SpecSheetDelo";
import SpecSheetHavoline from "../components/SpecSheetHavoline";
import SpecSheetTransmission from "../components/SpecSheetTransmission";
import ACEAStandard from "../components/standards/ACEA";
import APIStandard from "../components/standards/API";
import BMWStandard from "../components/standards/BMW";
import CatStandard from "../components/standards/Cat";
import FordStandard from "../components/standards/Ford";
import GMStandard from "../components/standards/GMOpelVauxhall";
import MANStandard from "../components/standards/MAN";
import MercedesBenzStandard from "../components/standards/MercedesBenz";
import PorscheStandard from "../components/standards/Porsche";
import ProprietaryStandard from "../components/standards/Proprietary";
import RenaultStandard from "../components/standards/Renault";
import VolvoStandard from "../components/standards/Volvo";
import VWStandard from "../components/standards/VWAudiSkoda";
import { useGlobalContext } from "../utils/context";

import Slide from "../utils/slide";

export default function StandardsPage() {
  const { setStandardsTable, standardsTableIsTogged } = useGlobalContext();
  return (
    <>
      <SearchEngineOptimisation
        title="Industri- och OEM-standarder för fordon"
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto mt-40">
          <StaticImage
            src="../images/icons/standards.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Marine"
            transformOptions={"cover"}
            className="block w-12 mx-auto mb-4"
          />
          <h3 className="mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
            Industri- och OEM-standarder för fordon
          </h3>
        </div>
        <button
          onClick={setStandardsTable}
          className="items-center hidden h-16 mx-auto hover:text-black hover:border-black no-print lg:block"
        >
          <span>
            {!standardsTableIsTogged ? (
              <div className="block mx-auto mb-8 text-center">
                <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                  Switch to Accordion
                </span>
              </div>
            ) : (
              <div className="block mx-auto mb-8 text-center">
                <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                  Switch to Table
                </span>
              </div>
            )}
          </span>
        </button>

        <div className="hidden px-4 mb-12 lg:block">
          {standardsTableIsTogged ? (
            <Slide
              direction={0}
              distance={1000}
              isActive={standardsTableIsTogged}
            >
              <div className="w-full bg-white">
                <ACEAStandard />
                <APIStandard />
                <BMWStandard />
                <CatStandard />
                <FordStandard />
                <GMStandard />
                <MANStandard />
                <MercedesBenzStandard />
                <RenaultStandard />
                <PorscheStandard />
                <VolvoStandard />
                <VWStandard />
                <ProprietaryStandard />
              </div>
            </Slide>
          ) : (
            <Slide
              direction={0}
              distance={1000}
              isActive={!standardsTableIsTogged}
            >
              <div className="w-full bg-white">
                <SpecSheetHavoline />
                <SpecSheetDelo />
                <SpecSheetTransmission />
              </div>
            </Slide>
          )}
        </div>

        <div className="px-4 mb-12 lg:hidden">
          <ACEAStandard />
          <APIStandard />
          <BMWStandard />
          <CatStandard />
          <FordStandard />
          <GMStandard />
          <MANStandard />
          <MercedesBenzStandard />
          <RenaultStandard />
          <PorscheStandard />
          <VolvoStandard />
          <VWStandard />
          <ProprietaryStandard />
        </div>
        {/* <div className="hidden px-4 mb-12 lg:block">
          <SpecSheetHavoline />
          <SpecSheetDelo />
          <SpecSheetTransmission />
        </div> */}
      </div>
    </>
  );
}
