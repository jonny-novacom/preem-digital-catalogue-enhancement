import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function SpecSheetDelo() {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          productCategory: {
            elemMatch: { title: { eq: "Engine oils heavy vehicles" } }
          }
        }
        sort: { fields: produkt, order: ASC }
      ) {
        nodes {
          produkt
          id
          _rawApplikationer
          sae
          viskositet40
          viskositet100
          vi
          flampunkt
          lagstaflyttemp
          pds
          sds
          saps
          featured
          slug {
            current
          }
          standardACEA {
            title
          }
          standardAPI {
            title
          }
          standardCat {
            title
          }
          standardFord {
            title
          }
          standardMAN {
            title
          }
          standardMercedesBenz {
            title
          }
          standardOther {
            title
          }
          standardRenault {
            title
          }
          standardVolvo {
            title
          }
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;

  return (
    <>
      <h3 className="mt-20 mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
        Översikt specifikationer motoroljor Texaco Delo
      </h3>

      <div className="overflow-x-scroll">
        <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
          <div className="inline-block px-2 text-left w-60 ml-15">Produkt</div>
          <div className="inline-block w-40 px-2 text-center">SAE-klass</div>
          <div className="inline-block w-40 px-2 text-center">ACEA</div>
          <div className="inline-block w-40 px-2 text-center">API</div>
          <div className="inline-block w-40 px-2 text-center">Cat</div>
          <div className="inline-block w-40 px-2 text-center">Ford</div>
          <div className="inline-block w-40 px-2 text-center">MAN</div>
          <div className="inline-block w-40 px-2 text-center">
            Mercedes Benz
          </div>
          <div className="inline-block w-40 px-2 text-center">Renault</div>
          <div className="inline-block w-40 px-2 text-center">Volvo</div>
          <div className="inline-block px-2 text-center w-72">Övrigt</div>
        </div>
        <div className="grid grid-cols-16">
          <div className="col-span-1 bg-preemGreen">
            <span
              className="relative block text-white transform -rotate-90 h-28 font-gothamNarrow w-max"
              style={{ top: "70px", right: "-28px" }}
            >
              Ultra Low Ash
            </span>
          </div>
          <div className="col-span-15">
            {singleProd
              .filter((thesaps) => thesaps.saps === "Ultra Low Ash*")
              .map((product) => (
                <div
                  key={product.id}
                  className="odd:bg-gray-100 even:bg-white w-max font-gothamNarrow"
                >
                  <div className="text-sm w-max ">
                    <div className="inline-block p-2 font-medium text-left align-top w-60">
                      {product.produkt}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.sae}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardACEA
                        .map((acea) => acea.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardAPI.map((api) => api.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardCat.map((cat) => cat.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardFord
                        .map((ford) => ford.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMAN.map((man) => man.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMercedesBenz
                        .map((merc) => merc.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardRenault
                        .map((renault) => renault.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardVolvo
                        .map((volvo) => volvo.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block p-2 text-center align-top w-72">
                      {product.standardOther
                        .map((other) => other.title)
                        .join(", ")}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-scroll">
        <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
          <div className="inline-block px-2 text-left w-60 ml-15">Produkt</div>
          <div className="inline-block w-40 px-2 text-center">SAE-klass</div>
          <div className="inline-block w-40 px-2 text-center">ACEA</div>
          <div className="inline-block w-40 px-2 text-center">API</div>
          <div className="inline-block w-40 px-2 text-center">Cat</div>
          <div className="inline-block w-40 px-2 text-center">Ford</div>
          <div className="inline-block w-40 px-2 text-center">MAN</div>
          <div className="inline-block w-40 px-2 text-center">
            Mercedes Benz
          </div>
          <div className="inline-block w-40 px-2 text-center">Renault</div>
          <div className="inline-block w-40 px-2 text-center">Volvo</div>
          <div className="inline-block px-2 text-center w-72">Övrigt</div>
        </div>
        <div className="grid grid-cols-16">
          <div className="col-span-1 bg-preemGreen">
            <span
              className="relative block text-white transform -rotate-90 font-gothamNarrow w-max"
              style={{ top: "980px", right: "2px" }}
            >
              Low SAPS
            </span>
          </div>
          <div className="col-span-15">
            {singleProd
              .filter((thesaps) => thesaps.saps === "Low SAPS")
              .map((product) => (
                <div
                  key={product.id}
                  className="odd:bg-gray-100 even:bg-white w-max font-gothamNarrow"
                >
                  <div className="text-sm w-max ">
                    <div className="inline-block p-2 font-medium text-left align-top w-60">
                      {product.produkt}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.sae}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardACEA
                        .map((acea) => acea.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardAPI.map((api) => api.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardCat.map((cat) => cat.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardFord
                        .map((ford) => ford.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMAN.map((man) => man.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMercedesBenz
                        .map((merc) => merc.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardRenault
                        .map((renault) => renault.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardVolvo
                        .map((volvo) => volvo.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block p-2 text-center align-top w-72">
                      {product.standardOther
                        .map((other) => other.title)
                        .join(", ")}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-x-scroll">
        <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
          <div className="inline-block px-2 text-left w-60 ml-15">Produkt</div>
          <div className="inline-block w-40 px-2 text-center">SAE-klass</div>
          <div className="inline-block w-40 px-2 text-center">ACEA</div>
          <div className="inline-block w-40 px-2 text-center">API</div>
          <div className="inline-block w-40 px-2 text-center">Cat</div>
          <div className="inline-block w-40 px-2 text-center">Ford</div>
          <div className="inline-block w-40 px-2 text-center">MAN</div>
          <div className="inline-block w-40 px-2 text-center">
            Mercedes Benz
          </div>
          <div className="inline-block w-40 px-2 text-center">Renault</div>
          <div className="inline-block w-40 px-2 text-center">Volvo</div>
          <div className="inline-block px-2 text-center w-72">Övrigt</div>
        </div>
        <div className="grid grid-cols-16">
          <div className="col-span-1 bg-preemGreen">
            <span
              className="relative block text-white transform -rotate-90 font-gothamNarrow w-max"
              style={{ top: "730px", right: "6px" }}
            >
              HIGH SAPS
            </span>
          </div>
          <div className="col-span-15">
            {singleProd
              .filter((thesaps) => thesaps.saps === "High SAPS")
              .map((product) => (
                <div
                  key={product.id}
                  className="odd:bg-gray-100 even:bg-white w-max font-gothamNarrow"
                >
                  <div className="text-sm w-max ">
                    <div className="inline-block p-2 font-medium text-left align-top w-60">
                      {product.produkt}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.sae}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardACEA
                        .map((acea) => acea.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardAPI.map((api) => api.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardCat.map((cat) => cat.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardFord
                        .map((ford) => ford.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMAN.map((man) => man.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardMercedesBenz
                        .map((merc) => merc.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardRenault
                        .map((renault) => renault.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardVolvo
                        .map((volvo) => volvo.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block p-2 text-center align-top w-72">
                      {product.standardOther
                        .map((other) => other.title)
                        .join(", ")}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
