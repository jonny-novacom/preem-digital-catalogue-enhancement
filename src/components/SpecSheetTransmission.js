import React from "react";
import TransmissionATF from "./printable-tables/TransmissionATF";
import TransmissionMTF from "./printable-tables/TransmissionMTF";
import TransmissionUTF from "./printable-tables/TransmissionUTF";
import TransmissionAxel from "./printable-tables/TransmissionAxel";
import TransmissionLSGL from "./printable-tables/TransmissionLSGL";
import TransmissionOther from "./printable-tables/TransmissionOther";

export default function SpecSheetTransmission() {
  return (
    <>
      <h3 className="mt-20 mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
        Översikt specifikationer transmissionsoljor fordon
      </h3>
      <TransmissionATF />
      <TransmissionMTF />
      <TransmissionUTF />
      <TransmissionAxel />
      <TransmissionLSGL />
      <TransmissionOther />
    </>
  );
}
