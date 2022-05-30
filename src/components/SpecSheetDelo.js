import React from "react";
import DeloUltraLowAsh from "./printable-tables/DeloUltraLowAsh";
import DeloLowSaps from "./printable-tables/DeloLowSaps";
import DeloHighSaps from "./printable-tables/DeloHighSaps";

export default function SpecSheetDelo() {
  return (
    <>
      <h3 className="mt-20 mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
        Översikt specifikationer motoroljor Texaco Delo
      </h3>

      <DeloUltraLowAsh />
      <DeloLowSaps />
      <DeloHighSaps />
    </>
  );
}
