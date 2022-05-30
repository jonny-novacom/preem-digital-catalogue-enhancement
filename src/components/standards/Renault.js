import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Accordion } from "react-bootstrap";

const RenaultStandard = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProduct(
        filter: { standardRenault: { elemMatch: { title: { ne: "" } } } }
        sort: {
          fields: [produkt, productCategory___product___standardRenault___title]
          order: [ASC, ASC]
        }
      ) {
        nodes {
          slug {
            current
          }
          produkt
          id
          newProduct
          featured
          sae
          standardRenault {
            title
            id
          }
        }
        distinct(field: standardRenault___title)
      }
    }
  `);

  const singleProd = data.allSanityProduct.nodes;
  const cats = data.allSanityProduct.distinct;

  return (
    <>
      <Accordion flush className="standards-acc">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Renault</Accordion.Header>

          <Accordion.Body>
            <Accordion className="inner cats">
              {cats.map((cats, i) => (
                <Accordion.Item eventKey={i} key={i}>
                  <Accordion.Header>{cats}</Accordion.Header>
                  <Accordion.Body>
                    <div className="py-2">
                      {singleProd
                        .filter(
                          (pub) =>
                            pub.standardRenault[0].title === cats ||
                            pub.standardRenault[1]?.title === cats ||
                            pub.standardRenault[2]?.title === cats ||
                            pub.standardRenault[3]?.title === cats ||
                            pub.standardRenault[4]?.title === cats ||
                            pub.standardRenault[5]?.title === cats ||
                            pub.standardRenault[6]?.title === cats ||
                            pub.standardRenault[7]?.title === cats ||
                            pub.standardRenault[8]?.title === cats ||
                            pub.standardRenault[9]?.title === cats ||
                            pub.standardRenault[10]?.title === cats
                        )
                        .sort((a, b) => (a < b ? -1 : 1))
                        .map((pub, j) => (
                          <div key={j}>
                            <div className="flex justify-start py-2 pl-10">
                              <Link to={`/products/${pub.slug.current}`}>
                                {pub.produkt}
                                <span
                                  className={
                                    pub.newProduct === true
                                      ? `text-left text-red-700 text-sm font-gothamNarrow font-bold italic ml-1.5 inline-block`
                                      : `hidden`
                                  }
                                >
                                  {" "}
                                  NY!
                                </span>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default RenaultStandard;
