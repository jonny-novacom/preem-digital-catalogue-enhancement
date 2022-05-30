import React from "react";

export default function ACEAMotoroljorDiesel() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          ACEA motoroljor 2016
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          Dieselmotorer i tunga fordon.
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr className="border-b-8 border-black">
              <td className="text-left">Beteckning</td>
              <td>Viskositet cP high temp & high shear 150°C</td>
              <td>Sulfataska %</td>
              <td>SAPS</td>
              <td>TBN mgKOH/g</td>
              <td>Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">E4</td>
              <td>≥3,5</td>
              <td>≤2,0</td>
              <td>High</td>
              <td>≥12</td>
              <td className="text-left">
                Viskositetsstabil olja som ger utmärkt kolvrenhet, slitageskydd,
                sothantering och oljestabilitet. Den rekommenderas för högt
                belastade motorer som möter utsläppskraven Euro I, II, III, IV
                samt V och har mycket svåra driftförhållanden t ex signifikant
                förlängda bytesintervall. Den är lämplig för motorer{" "}
                <span className="font-medium">utan</span> partikelfilter, vissa
                EGR-motorer samt vissa motorer utrustade med SCR NOx-reducering.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">E6</td>
              <td>≥3,5</td>
              <td>≤1,0</td>
              <td>Low</td>
              <td>≥7</td>
              <td className="text-left">
                Viskositetsstabil olja som ger utmärkt kolvrenhet, slitageskydd,
                sothantering och oljestabilitet. Den rekommenderas för högt
                belastade motorer som möter utsläppskraven Euro I, II, III, IV
                samt V och har mycket svåra driftförhållanden t ex signifikant
                förlängda bytesintervall. Den är lämplig för EGR-motorer, med
                eller utan partikelfilter, och motorer utrustade med SCR NO
                <sub>x</sub>-reducering.{" "}
                <span className="italic">
                  E6 rekommenderas starkt för motorer utrustade med
                  partikelfilter.
                </span>
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">E7</td>
              <td>≥3,5</td>
              <td>≤2,0</td>
              <td>High</td>
              <td>≥9</td>
              <td className="text-left">
                Viskositetsstabil olja som ger utmärkt kolvrenhet, skydd mot
                cylinderpolering, slitageskydd, sothantering och oljestabilitet.
                Den rekommenderas för högt belastade motorer som möter
                utsläppskraven Euro I, II, III, IV samt V och har svåra
                driftförhållanden t ex förlängda bytesintervall. Den är lämplig
                för motorer utan partikelfilter, vissa EGR-motorer samt de
                flesta motorer utrustade med SCR NO<sub>x</sub>-reducering.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">E9</td>
              <td>≥3,5</td>
              <td>≤1,0</td>
              <td>Low</td>
              <td>≥7</td>
              <td className="text-left">
                Viskositetsstabil olja som ger utmärkt kolvrenhet, skydd mot
                cylinderpolering, slitageskydd, sothantering och oljestabilitet.
                Den rekommenderas för högt belastade motorer som möter
                utsläppskraven Euro I, II, III, IV samt V och har svåra
                driftförhållanden, t ex förlängda bytesintervall. Den är lämplig
                för EGR-motorer, med eller utan partikelfilter, och motorer
                utrustade med SCR NO<sub>x</sub>-reducering.{" "}
                <span className="italic">
                  E9 rekommenderas starkt för motorer utrustade med
                  partikelfilter.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
