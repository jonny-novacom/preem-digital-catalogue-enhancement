import React from "react";

export default function APIBasoljeklassificering() {
  return (
    <>
      <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
        API basoljeklassificering
      </h3>
      <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
        American Pertoleum Institute. Specifikationer för basoljor. För att
        klara de högt ställda kraven på moderna motoroljor med långa
        bytesintervaller och avgasreningsutrustning kan inte traditionellt
        solventraffinerade basoljor användas (API Grupp I). För att tillverka en
        s.k. Low SAPS olja måste Grupp II, III eller IV användas.
      </p>
      <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
        <tbody>
          <tr className="border-b-8 border-black">
            <td>Grupp</td>
            <td colSpan={2}>Mättade HC (% vikt)</td>
            <td colSpan={2}>Svavel (% vikt)</td>
            <td>Viskositetsindex</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">I</td>
            <td>{"<"}90</td>
            <td>och/eller</td>
            <td>{">"}0.03</td>
            <td>och</td>
            <td>≥80 {"<"}120</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">II</td>
            <td>≥90</td>
            <td>och</td>
            <td>≤0.03</td>
            <td>och</td>
            <td>≥80 {"<"}120</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">III</td>
            <td>≥90</td>
            <td>och</td>
            <td>≤0.03</td>
            <td>och</td>
            <td>≥120</td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">IV</td>
            <td colSpan={5} className="text-left">
              PAO (Polyalphaolefins)
            </td>
          </tr>
          <tr className="font-normal">
            <td className="font-medium">V</td>
            <td colSpan={5} className="text-left">
              Alla oljor som inte är Grupp I-IV
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
