import React from "react";
import HavolineHighSaps from "./printable-tables/HavolineHighSaps";
import HavolineLowMidSaps from "./printable-tables/HavolineLowMidSaps";

export default function SpecSheetHavoline() {
  return (
    <>
      <h3 className="mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow mt-12">
        Översikt motoroljespecifikationer/prestanda för personbilar och lätta
        transportfordon
      </h3>
      <HavolineHighSaps />
      <HavolineLowMidSaps />
    </>
  );
}
