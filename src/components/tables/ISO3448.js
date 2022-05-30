import React from "react";

export default function ISO3448() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          ISO 3448 viskositetsklasser för hydraul- och industrioljor
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          International Organization for Standardization. Klassificeringssystem
          för viskositeter, referens- temperaturen är +40°C. Det finns 18
          klasser, avvikelse från mittvärdet tillåts med +/- 10%.
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr className="border-b-8 border-black">
              <td className="text-left">ISO 3448 viskositetsklass</td>
              <td>Medelvärde vid 40°C mm²/s (cSt)</td>
              <td>Min</td>
              <td>Max</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 2</td>
              <td>2.2</td>
              <td>1.98</td>
              <td>2.42</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 3</td>
              <td>3.2</td>
              <td>2.88</td>
              <td>3.52</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 5</td>
              <td>4.6</td>
              <td>4.14</td>
              <td>5.06</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 7</td>
              <td>6.8</td>
              <td>6.12</td>
              <td>7.48</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 10</td>
              <td>10</td>
              <td>9</td>
              <td>11</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 15</td>
              <td>15</td>
              <td>13.5</td>
              <td>16.5</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 22</td>
              <td>22</td>
              <td>19.8</td>
              <td>24.2</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 32</td>
              <td>32</td>
              <td>28.8</td>
              <td>35.2</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 46</td>
              <td>46</td>
              <td>41.4</td>
              <td>50.6</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 68</td>
              <td>68</td>
              <td>61.2</td>
              <td>74.8</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 100</td>
              <td>100</td>
              <td>90</td>
              <td>110</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 150</td>
              <td>150</td>
              <td>135</td>
              <td>165</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 220</td>
              <td>220</td>
              <td>198</td>
              <td>242</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 320</td>
              <td>320</td>
              <td>288</td>
              <td>352</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 460</td>
              <td>460</td>
              <td>414</td>
              <td>506</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 680</td>
              <td>680</td>
              <td>612</td>
              <td>748</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 1000</td>
              <td>1000</td>
              <td>900</td>
              <td>1100</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">ISO VG 1500</td>
              <td>1500</td>
              <td>1350</td>
              <td>1650</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
