import React from "react";

export default function NLGITable() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          Konsistens smörjfett enligt NLGI, National Lubricating Grease
          Institute (USA)
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          En kon släpps ned i fettprovet och inträngning mäts i tiondels
          millimeter. NLGI 2 är den vanligaste konsistensklassen. För att få
          bättre pumpbarhet i centralsmörjsystem kan ett mjukare fett användas.
          Till fettsmorda växlar är det vanligt med NLGI 000 till 0. NLGI 3
          används ibland till vibrerande inbyggnader, vertikala axlar, vissa
          elmotorer m m. NLGI 4 till 6 förekommer sällan idag. NLGI 6 kallas
          även blockfett då det skars bitar med kniv ur ett block. Bitarna
          placerades i lager på ångmaskiner där de fick smälta/smörja.
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr className="border-b-8 border-black">
              <td className="text-left">NLGI-klass</td>
              <td>
                Penetration mm<sup>-1</sup>
              </td>
              <td>Konsistens</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">000</td>
              <td>445-475</td>
              <td>Flytande</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">00</td>
              <td>400-430</td>
              <td>Halvflytande</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">0</td>
              <td>355-385</td>
              <td>Mjukt</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">1</td>
              <td>310-340</td>
              <td>Halvfast</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">2</td>
              <td>265-295</td>
              <td>Fast</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">3</td>
              <td>220-250</td>
              <td>Extra fast</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">4</td>
              <td>175-205</td>
              <td>Stelt</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">5</td>
              <td>130-160</td>
              <td>Extra stelt</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">6</td>
              <td>85-115</td>
              <td>Hårt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
