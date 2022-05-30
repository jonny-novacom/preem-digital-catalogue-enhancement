import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlockContent from "@sanity/block-content-to-react";

export default function SingleProduct() {
  const { product } = useStaticQuery(graphql`
    query {
      product: allSanityProduct(sort: { fields: produkt, order: ASC }) {
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
          mainImage {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 600, height: 600)
              url
            }
          }
        }
      }
    }
  `);

  const singleProduct = product.nodes;

  return (
    <>
      <div className="mt-36">
        {singleProduct.map((product, i) => (
          <div key={i} className="p-4 odd:bg-gray-50 even:bg-gray-200">
            <span className="font-gothamNarrow text-bold text-left text-md mb-2 text-gray-700 block">
              {product.produkt}
            </span>
            <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium mt-2 mb-4">
              <BlockContent
                blocks={product._rawApplikationer}
                projectId="1tbc9cjy"
                dataset="production"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                SAE
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.sae}
              </div>
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                Viskositet cSt, mm²/s 40°C
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.viskositet40}
              </div>
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                Viskositet cSt, mm²/s 100°C
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.viskositet100}
              </div>
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                VI
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.vi}
              </div>
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                Flampunkt °C
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.flampunkt}
              </div>
              <div className="font-gothamNarrow text-bold text-left text-md text-gray-700 block">
                Lägstaflyttemp °C
              </div>
              <div className="text-left text-gray-500 text-md font-gothamNarrow font-medium">
                {product.lagstaflyttemp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
