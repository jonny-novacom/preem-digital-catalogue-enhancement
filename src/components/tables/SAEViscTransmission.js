import React from "react";

export default function SAEViscTransmission() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          SAE viskositetsklasser för transmissionsoljor
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          Dynamisk viskositet 1 cP = 1 mPa*s. Kinematisk viskositet 1 cSt = 1 mm
          <sup>2</sup>/s
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr>
              <td>SAE J306</td>
              <td>
                Högsta temperatur för en
                <br />
                viskositet om 150.000 cP
              </td>
              <td colSpan={2}>
                Viskositet mm<sup>2</sup>/s vid 100°C
              </td>
            </tr>
            <tr className="border-b-8 border-black">
              <td></td>
              <td></td>
              <td>min</td>
              <td>max</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">70W</td>
              <td>-55°C</td>
              <td>3.8</td>
              <td>—</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">75W</td>
              <td>-40°C</td>
              <td>3.8</td>
              <td>—</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">80W</td>
              <td>-26°C</td>
              <td>8.5</td>
              <td>—</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">85W</td>
              <td>-12°C</td>
              <td>11.0</td>
              <td>—</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">65</td>
              <td>—</td>
              <td>3.8</td>
              <td>{"<"}5</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">70</td>
              <td>—</td>
              <td>5.0</td>
              <td>{"<"}6.5</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">80</td>
              <td>—</td>
              <td>8.5</td>
              <td>{"<"}11.0</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">85</td>
              <td>—</td>
              <td>11.0</td>
              <td>{"<"}13.5</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">90</td>
              <td>—</td>
              <td>13.5</td>
              <td>{"<"}18.5</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">110</td>
              <td>—</td>
              <td>18.5</td>
              <td>{"<"}24.0</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">140</td>
              <td>—</td>
              <td>24.0</td>
              <td>{"<"}32.5</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">190</td>
              <td>—</td>
              <td>32.5</td>
              <td>{"<"}41.0</td>
            </tr>
            <tr className="font-normal">
              <td className="font-medium">250</td>
              <td>—</td>
              <td>41.0</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
