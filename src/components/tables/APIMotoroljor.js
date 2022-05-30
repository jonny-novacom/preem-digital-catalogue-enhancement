import React from "react";

export default function APIMotoroljor() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
          API motoroljor
        </h3>
        <p className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
          American Petroleum Institute. Specifikationer för motoroljor.
        </p>
        <table className="w-full overflow-x-scroll font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr>
              <td colSpan={3}></td>
            </tr>
            <tr className="bg-white">
              <td colSpan={3} className="text-left">
                Bensinmotorer
              </td>
            </tr>
            <tr className="bg-white border-b-8 border-black">
              <td className="pl-4 font-medium text-left">Kategori</td>
              <td className="px-6">Status</td>
              <td className="text-left">Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">API SP</td>
              <td>Aktuell</td>
              <td className="text-left">
                Introducerades i maj 2020 och är utformad för att ge skydd mot
                förtändning (LSPI), skydd mot kedjeslitage, ge bättre
                högtemperaturskydd mot beläggningar på kolvar och turboladdare
                samt strängare kontroll av slam och lackbildning. API SP med
                ”Resource Conserving” matchar ILSAC GF-6A genom att kombinera
                API SP-prestanda med förbättrad bränsleekonomi, skydd för
                avgasreningssystem och skydd för motorer som körs på bränslen
                innehållande etanol upp till E85.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">API SN Plus</td>
              <td>Aktuell</td>
              <td className="text-left">
                Introducerades maj 2018, API SN Plus är en API-klassificering
                som kan användas tillsammans med API SN d.v.s API SN med
                förbättrad bränsleekonomi som även kan användas tillsammans med
                ILSAC GF-5. API SN är även utformad för att skydda mot
                förtändning (LSPI).
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SM</td>
              <td>Aktuell</td>
              <td className="text-left">För 2010 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SL</td>
              <td>Aktuell</td>
              <td className="text-left">För 2004 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SJ</td>
              <td>Aktuell</td>
              <td className="text-left">För 2001 och äldre motorer</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SH</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1996.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SG</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1993.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SF</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1988.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SE</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1979.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SD</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1971.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SC</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1967.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SB</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för motorer tillverkade efter 1951.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">SA</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: innehåller ej additiv. Olämplig för motorer tillverkade
                efter 1930.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-6"></div>
        <table className="w-full font-medium shadow-none table-auto font-gothamNarrow">
          <tbody>
            <tr>
              <td colSpan={3}></td>
            </tr>
            <tr className="bg-white">
              <td colSpan={3} className="text-left">
                Dieselmotorer
              </td>
            </tr>
            <tr className="bg-white border-b-8 border-black">
              <td className="pl-4 font-medium text-left">Kategori</td>
              <td className="px-6">Status</td>
              <td className="text-left">Beskrivning</td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">FA-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Motoroljor med viskositet XW-30, speciellt formulerad för att
                möta 2017 års modeller av tunga 4-T-fordon tillverkade för att
                möta de nya emissionskraven av växthusgaser. Oljorna är
                formulerade för dieselbränsle med svavelhalt {"<"}15 ppm. Kan ej
                ersättas med och är ej bakåtkompatibel med API CK-4, CJ-4, CI-4,
                CI-4 PLUS, CI-4, och CH-4 oljor. HTHS-viskositet mellan
                2.9cP-3.2cP för att bidra till minskning av växthusgaser. Dessa
                oljor bidrar effektivt till bibehållen funktion och livslängd av
                avgasreningsutrustning. Oljorna är framtagna för att bidra till
                förbättrat skydd mot oxidation, viskositetsminskning pga av
                skjuvning, motorslitage, avlagringar på kolvringar, sotrelaterad
                viskositetsökning samt skydda katalysator och partikelfilter mot
                igensättning.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CK-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Oljor för snabbgående 4-takts dieselmotorer konstruerade för att
                möta avgas- emissionskraven 2017 on-highway och Tier 4 Nonroad
                samt även tidigare modeller av dieselmotorer. Oljorna är
                formulerade för dieselbränsle med en svavelhalt {"<"}500ppm. Men
                användning av dessa oljor i kombination med dieselbränsle
                innehållande mer än 15 ppm svavel kan skada
                avgasrenings-utrustningens livslängd och/eller påverka
                oljebytesintervallen.API CK-4 överträffar API CJ-4, CI-4+, CI-4,
                CH-4, CG-4 samt CF-4 och kan användas för motorer som kräver
                dessa specifikationer. Vid svavelhalter {">"}15 ppm, kontrollera
                manualen för bytesintervall.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CJ-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Olja för snabbgående 4-takts dieselmotorer konstruerade för att
                möta avgas-emissionskrav 2010 on-highway och Tier 4 Nonroad samt
                även tidigare modeller av dieselmotorer. Oljorna är formulerade
                för dieselbränsle med en svavelhalt {"<"}500 ppm. CJ-4 oljorna
                bevarar effektiviteten på partikelfilter och andra avancerade
                avgasbehandlingssystem. Optimalt skydd mot
                katalysatorförgiftning, partikelfilterblockering, motorslitage,
                beläggningar på kolvar, låg- och högtemperaturstabilitet,
                sothantering, oxidation, skumning och nedskjuvning. API CJ-4
                överträffar API CI-4+, CI-4, CH-4, CG-4 samt CF-4 och kan
                användas för motorer som har krav på de specifikationerna. Vid
                svavelhalter {">"}15 ppm, kontrollera manualen för
                bytesintervall.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CI-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Introducerad 2002. Olja för snabbgående 4-takts dieselmotorer
                konstruerade för att möta 2004 års avgasemissionskrav. CI-4 är
                formulerad för motorer med EGR. Svavelhalt bränsle {"<"}0,5%.
                Kan ersätta oljor som har CD, CE, CF-4 och CH-4. Vissa
                CI-4-oljor möter även CI-4+.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CH-4</td>
              <td>Aktuell</td>
              <td className="text-left">
                Svavelhalt bränsle {"<"}0,5%. Olja för snabbgående 4-takts
                dieselmotorer konstruerade för att möta 1998 års
                avgasemissionskrav. Svavelhalt bränsle {"<"}0,5%. Kan ersätta
                CD-, CE-, CF-4- och CG-4-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CG-4</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1995. Olja för snabbgående 4-takts dieselmotorer
                konstruerade för att möta 1994 års avgasemissionskrav.
                Svavelhalt bränsle {"<"}0,5%. Kan ersätta CD-, CE-, och
                CF-4-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CF-4</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1990. För snabbgående 4-takts dieselmotorer med
                eller utan turbo. Kan ersätta CD- och CE-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CF-2</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1994. För 2-takts dieselmotorer. Kan ersätta CD-II
                olja.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CF</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1994. För off-road, indirekt insprutning och andra
                motorer. Även svavel {">"}0,5%. Kan ersätta CD.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CE</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1985. För snabbgående 4-takts dieselmotorer med
                eller utan turbo. Kan ersätta CC- och CD-oljor.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CD-II</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1995. För 2-takts motorer.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CD</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Introducerad 1955. För vissa motorer med och utan turbo.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CC</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1990.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CB</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1961.
              </td>
            </tr>
            <tr className="font-normal">
              <td className="pl-4 font-medium text-left">CA</td>
              <td>Inaktuell</td>
              <td className="text-left">
                Varning: olämplig för dieselmotorer tillverkade efter 1959.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
