import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { graphql, useStaticQuery } from "gatsby";
import { CgPrinter } from "react-icons/cg";

const ComponentToPrint = forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: {
          productCategory: { elemMatch: { title: { eq: "Transmission oils" } } }
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
          standardAPI {
            title
          }
          standardBMW {
            title
          }
          standardCat {
            title
          }
          standardFord {
            title
          }
          standardGM {
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
          standardVW {
            title
          }
          standardVolvo {
            title
          }
          standardProprietary {
            title
          }
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;

  return (
    <div className="overflow-x-scroll">
      <div ref={ref}>
        <h3 className="hidden w-[225%] mt-12 mb-8 text-5xl font-bold text-center text-preemGreen font-gothamNarrow printable">
          Översikt specifikationer transmissionsoljor fordon
        </h3>
        <h4 className="hidden w-[225%] mt-12 mb-24 text-5xl font-bold text-center text-preemGreen font-gothamNarrow printable">
          Axel- Och Hypoidoljor
        </h4>
        <div className="pb-2 font-medium border-b-8 border-black w-max font-gothamNarrow">
          <div className="inline-block px-2 text-left w-60 ml-15 printer-ml">
            Produkt
          </div>
          <div className="inline-block w-40 px-2 text-center">SAE-klass</div>
          <div className="inline-block w-40 px-2 text-center">API</div>
          <div className="inline-block w-40 px-2 text-center">BMW</div>
          <div className="inline-block w-40 px-2 text-center">Cat</div>
          <div className="inline-block w-40 px-2 text-center">Ford</div>
          <div className="inline-block w-40 px-2 text-center">
            GM/Opel/Vauxhall
          </div>
          <div className="inline-block w-40 px-2 text-center">MAN</div>
          <div className="inline-block w-40 px-2 text-center">
            Mercedes Benz
          </div>
          <div className="inline-block w-40 px-2 text-center">Volvo</div>
          <div className="inline-block w-40 px-2 text-center">
            VW/Audi/Skoda
          </div>
          <div className="inline-block px-2 text-center w-72">
            Allison/Bosch/Voith/ZF
          </div>
          <div className="inline-block px-2 text-center w-72">Övrigt</div>
        </div>
        <div className="grid grid-cols-16">
          <div className="col-span-1 bg-preemGreen">
            <span
              className="relative block text-center text-white transform -rotate-90 font-gothamNarrow w-max"
              style={{ top: "75px", right: "21px" }}
            >
              AXEL- OCH
              <br />
              HYPOIDOLJOR
            </span>
          </div>
          <div className="col-span-15">
            {singleProd
              .filter((thesaps) => thesaps.saps === "AXEL- OCH HYPOIDOLJOR")
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
                      {product.standardAPI.map((api) => api.title).join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardBMW.map((bmw) => bmw.title).join(", ")}
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
                      {product.standardGM.map((gm) => gm.title).join(", ")}
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
                      {product.standardVolvo
                        .map((volvo) => volvo.title)
                        .join(", ")}
                    </div>
                    <div className="inline-block w-40 p-2 text-center align-top">
                      {product.standardVW.map((vw) => vw.title).join(", ")}
                    </div>
                    <div className="inline-block p-2 text-center align-top w-72">
                      {product.standardProprietary
                        .map((proprietary) => proprietary.title)
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
    </div>
  );
});

export default function TransmissionAxel() {
  const ref = useRef();

  return (
    <div>
      <ComponentToPrint ref={ref} />
      <ReactToPrint
        bodyClass="m-4 scale-transmission"
        content={() => ref.current}
      >
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <>
              <div className="block mx-auto mt-4 mb-12 text-center">
                <button onClick={handlePrint}>
                  <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                    <CgPrinter className="inline-block mr-2 -mt-1 text-2xl text-preemGreen" />{" "}
                    Skriv ut den här sidan
                  </span>
                </button>
              </div>
            </>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
    </div>
  );
}
