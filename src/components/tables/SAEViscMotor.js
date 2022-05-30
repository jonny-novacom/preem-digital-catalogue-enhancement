import React from "react";

export default function SAEViscMotor() {
  return (
    <>
      <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
        SAE viskositetsklasser för motoroljor
      </h3>
      <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
        Society of Automobile Engineers är en amerikansk organisation för
        standardisering inom bilindustrin. Dynamisk viskositet 1 cP = 1 mPa*s
        Kinematisk viskositet 1 cSt = 1 mm<sup>2</sup>s
      </p>
      <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
        <tbody>
          <tr>
            <td>SAE J300</td>
            <td colSpan={2}>Viskositet låg temperatur</td>
            <td colSpan={3}>Viskositet hög temperatur</td>
          </tr>
          <tr>
            <td>Viskositetsklass</td>
            <td>
              CCS<sup>1</sup> mPa*s
            </td>
            <td>Pumpning mPa*s</td>
            <td colSpan={2}>
              Kinematisk mm<sup>2</sup>/s vid 100°C
            </td>
            <td>
              High Shear Rate<sup>2</sup> mPa*s
            </td>
          </tr>
          <tr className="border-b-8 border-black">
            <td></td>
            <td>max vid °C</td>
            <td>max vid °C</td>
            <td>min</td>
            <td>max</td>
            <td>min @ 150°C</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">0W</td>
            <td>6200 @-35</td>
            <td>60 000 @-40</td>
            <td>3.8</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">5W</td>
            <td>6600 @-30</td>
            <td>60 000 @-35</td>
            <td>3.8</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">10W</td>
            <td>7000 @-25</td>
            <td>60 000 @-30</td>
            <td>4.1</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">15W</td>
            <td>7000 @-20</td>
            <td>60 000 @-25</td>
            <td>5.6</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">20W</td>
            <td>9500 @-15</td>
            <td>60 000 @-20</td>
            <td>5.6</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">25W</td>
            <td>13 000 @-10</td>
            <td>60 000 @-15</td>
            <td>9.3</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">8</td>
            <td>—</td>
            <td>—</td>
            <td>4.0</td>
            <td>{"<"}6.1</td>
            <td>1.7</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">12</td>
            <td>—</td>
            <td>—</td>
            <td>5.0</td>
            <td>{"<"}7.1</td>
            <td>2.0</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">16</td>
            <td>—</td>
            <td>—</td>
            <td>6.1</td>
            <td>{"<"}8.2</td>
            <td>2.3</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">20</td>
            <td>—</td>
            <td>—</td>
            <td>5.6</td>
            <td>{"<"}9.3</td>
            <td>2.6</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">30</td>
            <td>—</td>
            <td>—</td>
            <td>9.3</td>
            <td>{"<"}12.5</td>
            <td>2.9</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">40</td>
            <td>—</td>
            <td>—</td>
            <td>12.5</td>
            <td>{"<"}16.3</td>
            <td>
              3.5<sup>3</sup>, 3.7<sup>4</sup>
            </td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">50</td>
            <td>—</td>
            <td>—</td>
            <td>16.3</td>
            <td>{"<"}21.9</td>
            <td>3.7</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">60</td>
            <td>—</td>
            <td>—</td>
            <td>21.9</td>
            <td>{"<"}26.1</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
      <div className="px-4 pt-8">
        <ol className="text-sm list-decimal">
          <li className="italic font-normal text-left text-gray-800 text-md font-gothamNarrow">
            Mätt med Cold Cranking Simulator. Simulerar vev-/ramlager vid start
            i kyla.
          </li>
          <li className="italic font-normal text-left text-gray-800 text-md font-gothamNarrow">
            Simulerar vev-/ramlager vid högt varvtal och hög drifttemperatur.
          </li>
          <li className="italic font-normal text-left text-gray-800 text-md font-gothamNarrow">
            0W-40, 5W-40 och 10W-40.
          </li>
          <li className="italic font-normal text-left text-gray-800 text-md font-gothamNarrow">
            15W-40, 20W-40, 25W-40 och 40.
          </li>
        </ol>
      </div>
    </>
  );
}
