import React from "react";

export default function ACEAMotoroljor() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          ACEA motoroljor 2021
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          A/B: Bensin- och dieselmotorer i person- och lätta transportbilar-
          ”High SAPS”
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr className="border-b-8 border-black">
              <td className="text-left">Beteckning</td>
              <td>Viskositet cP high temp & high shear 150°C</td>
              <td>Sulfataska %</td>
              <td>SA = Sulfateradaska</td>
              <td>Bränslebesparing mot 15W-40%</td>
              <td>Beskrivning</td>
            </tr>

            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">
                A3/B3
                <br />
                <span className="font-normal text-red-500">Utgått!</span>
              </td>
              <td>≥3,5</td>
              <td>≥0,9 och ≤1,5</td>
              <td>High</td>
              <td>—</td>
              <td className="text-left">
                Viskositetsstabil motorolja med bra kvalitet, även gjord för
                förlängda oljebytesintervall där det anges av
                fordonstillverkaren.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">A3/B4</td>
              <td>≥3,5</td>
              <td>≥1,0 och ≤1,6</td>
              <td>High</td>
              <td>—</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet avsedd för vissa
                motorer med förlängt bytesintervall. Lämpar sig även för
                direktinsprutade dieselmotorer. Kan även användas för fordon där
                kravet är A3/B3.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">A5/B5</td>
              <td>≥2,9 och ≤3,5</td>
              <td>≤1,6</td>
              <td>High</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet avsedd för vissa
                motorer med förlängt bytesintervall och motorer konstruerade för
                tunna lågfriktionsoljor. Olämplig för vissa motortyper. Se
                handboken vid tveksamheter!
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">A7/B7</td>
              <td>≥2,9 och ≤3,5</td>
              <td>≤1,6</td>
              <td>High</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet avsedd för vissa
                motorer med förlängt bytesintervall och motorer konstruerade för
                tunna lågfriktionsoljor. Skyddar även mot förtändning (LSPI) och
                extra slitageskydd för turboladdade bensin- och dieselmotorer.
                Se handboken vid tveksamheter!
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="pl-4 font-medium text-left">
                Oljor för bensin- och dieselmotorer med trevägs katalysator och
                partikelfilter, GPF/DPF
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">
                C1
                <br />
                <span className="font-normal text-red-500">Utgått!</span>
              </td>
              <td>≥2,9</td>
              <td>≤0,5</td>
              <td>Low</td>
              <td>≥3,0</td>
              <td className="text-left">
                Viskositetsstabil motorolja för hög-prestanda motorer
                konstruerade för tunna lågfriktionsoljor. Lägst SAPS, olämplig
                för vissa motortyper.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">C2</td>
              <td>≥2,9</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥2,5</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet. Kompatibel med
                efterbehandlingsutrustning. För motorer konstruerade för oljor
                med HTHS-värde på min. 2.9 mPas, dvs lågfriktionsoljor. Olämplig
                för vissa motortyper. Se handboken vid tveksamheter!
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">C3</td>
              <td>≥3,5</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥1,0 (för xW-30)</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet. Avsedd för
                förlängda oljebytesintervaller i motorer som kräver ett
                HTHS-värde på min. 3.5 mPas. Olämplig för vissa motortyper. Se
                handboken vid tveksamheter!
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">C4</td>
              <td>≥3,5</td>
              <td>≤0,5</td>
              <td>Low</td>
              <td>≥1,0 (för xW-30)</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet. Avsedd för
                förlängda oljebytesintervaller i motorer som kräver ett
                HTHS-värde på min. 3.5 mPas. Olämplig för vissa motortyper. Se
                handboken vid tveksamheter!
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">C5</td>
              <td>≥2,6 och {"<"}2,9</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>≥3,0</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet. Kompatibel med
                efterbehandlingsutrustning. För motorer konstruerade för oljor
                med HTHS-värde på min. 2.6 mPas, dvs lågfriktionsoljor. Olämplig
                för vissa motortyper. Se handboken vid tveksamheter!
              </td>
            </tr>

            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">C6</td>
              <td>≥2,6 och {"<"}2,9</td>
              <td>≤0,8</td>
              <td>Mid</td>
              <td>—</td>
              <td className="text-left">
                Viskositetsstabil motorolja med hög kvalitet. Kompatibel med
                efterbehandlingsutrustning. För motorer konstruerade för oljor
                med HTHS-värde på min. 2.6 mPas, dvs lågfriktionsoljor. .
                Skyddar även mot förtändning (LSPI) och extra slitageskydd för
                turboladdade bensin- och dieselmotorer. Se handboken vid
                tveksamheter!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
