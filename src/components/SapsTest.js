import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SanityBlockContent from "@sanity/block-content-to-react";

const SapsTest = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct {
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
        }
        distinct(field: saps)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush>
        {cats.map((cats, i) => (
          <>
            <Accordion.Item eventKey={i}>
              <Accordion.Header>{cats}</Accordion.Header>
              {singleProd
                .filter((pub) => pub.saps === cats)
                .map((pub, j) => (
                  <Accordion.Body>
                    <Accordion className="inner">
                      <Accordion.Item eventKey={j}>
                        <Accordion.Header>{pub.produkt}</Accordion.Header>
                        <Accordion.Body>
                          <div className="px-4 pt-1 pb-4 odd:bg-white -mt-2">
                            <div className="text-left text-gray-500 text-md font-gothamNarrow font-normal mt-2 mb-4">
                              <SanityBlockContent
                                blocks={pub._rawApplikationer}
                                projectId="1tbc9cjy"
                                dataset="production"
                              />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                SAE
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.sae}
                              </div>
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm²/s 40°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.viskositet40}
                              </div>
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                Viskositet cSt, mm²/s 100°C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.viskositet100}
                              </div>
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                VI
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.vi}
                              </div>
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                Flampunkt °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.flampunkt}
                              </div>
                              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block col-span-2">
                                Lägstaflyttemp °C
                              </div>
                              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium col-span-3">
                                {pub.lagstaflyttemp}
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                ))}
            </Accordion.Item>
          </>
        ))}
      </Accordion>
    </>
  );
};

export default SapsTest;
