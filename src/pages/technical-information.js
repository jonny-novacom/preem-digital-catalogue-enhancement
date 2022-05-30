import * as React from "react";
import ISO3448 from "../components/tables/ISO3448";
import Jamforelse from "../components/tables/Jamforelse";
import SAEViscMotor from "../components/tables/SAEViscMotor";
import SAEViscTransmission from "../components/tables/SAEViscTransmission";
import APIMotoroljor from "../components/tables/APIMotoroljor";
import Hr from "../utils/hr";
import ACEAMotoroljor from "../components/tables/ACEAMotoroljor";
import ACEAMotoroljorDiesel from "../components/tables/ACEAMotoroljorDiesel";
import EUUtslappsgranser from "../components/tables/EUUtslappsgranser";
import APIBasoljeklassificering from "../components/tables/APIBasoljeklassificering";
import NLGITable from "../components/tables/NLGI";
import TechInfoFilter from "../components/TechInfoFilter";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function TechnicalInformationPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Teknisk information"
        image=""
        description=""
      />
      <TechInfoFilter />
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 mt-40">
          <h1 className="block mb-4 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            Teknisk information
          </h1>
          <div id="sae" className="pb-32 -mt-32"></div>
          <SAEViscMotor />
          <Hr />
          <SAEViscTransmission />
          <Hr />
          <div id="iso" className="pb-32 -mt-32"></div>
          <ISO3448 />
          <Hr />
          <Jamforelse />
          <Hr />
          <div id="api" className="pb-32 -mt-32"></div>
          <APIMotoroljor />
          <Hr />
          <div id="acea" className="pb-32 -mt-32"></div>
          <ACEAMotoroljor />
          <Hr />
          <ACEAMotoroljorDiesel />
          <Hr />
          <div id="euro" className="pb-32 -mt-32"></div>
          <EUUtslappsgranser />
          <Hr />
          <APIBasoljeklassificering />
          <Hr />
          <div id="nlgi" className="pb-32 -mt-32"></div>
          <NLGITable />
          <Hr />
        </div>
      </div>
    </>
  );
}
