import { graphql, Link } from "gatsby";
import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Accordion } from "react-bootstrap";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function SingleProductPage({ data: { categories } }) {
  return (
    <>
      <SearchEngineOptimisation
        title={categories.titleSwedish}
        image=""
        description="Produkt, applikationer, specifikationer"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 mb-20 mt-36">
          <h1 className="block mb-4 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            {categories.titleSwedish}
          </h1>

          {categories.product.map((product, i) => (
            <Accordion className="inner" key={i}>
              <Accordion.Item eventKey={product.id}>
                <Accordion.Header>{product.produkt}</Accordion.Header>
                <Accordion.Body>
                  <div className="pt-1 pb-4 pl-10 pr-4">
                    <div className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                      <SanityBlockContent
                        blocks={product._rawApplikationer}
                        projectId="1tbc9cjy"
                        dataset="production"
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      <div
                        className={
                          product.sae !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        SAE
                      </div>
                      <div
                        className={
                          product.sae !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.sae}
                      </div>

                      <div
                        className={
                          product.farg !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Färg
                      </div>
                      <div
                        className={
                          product.farg !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.farg}
                      </div>

                      <div
                        className={
                          product.aromathalt !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Aromathalt %
                      </div>
                      <div
                        className={
                          product.aromathalt !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.aromathalt}
                      </div>

                      <div
                        className={
                          product.kokpunkt !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Kokpunkt (koncentrat)
                      </div>
                      <div
                        className={
                          product.kokpunkt !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.kokpunkt}
                      </div>

                      <div
                        className={
                          product.isovg !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        ISO VG
                      </div>
                      <div
                        className={
                          product.isovg !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.isovg}
                      </div>

                      <div
                        className={
                          product.densitet !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Densitet kg/m³
                      </div>
                      <div
                        className={
                          product.densitet !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.densitet}
                      </div>

                      <div
                        className={
                          product.viskositet40 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Viskositet cSt, mm²/s 40°C
                      </div>
                      <div
                        className={
                          product.viskositet40 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.viskositet40}
                      </div>

                      <div
                        className={
                          product.viskositet100 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Viskositet cSt, mm²/s 100°C
                      </div>
                      <div
                        className={
                          product.viskositet100 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.viskositet100}
                      </div>

                      <div
                        className={
                          product.vi !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        VI
                      </div>
                      <div
                        className={
                          product.vi !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.vi}
                      </div>

                      <div
                        className={
                          product.tbnbastal !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        TBN Bastal
                      </div>
                      <div
                        className={
                          product.tbnbastal !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tbnbastal}
                      </div>

                      <div
                        className={
                          product.flampunkt !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Flampunkt °C
                      </div>
                      <div
                        className={
                          product.flampunkt !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.flampunkt}
                      </div>

                      <div
                        className={
                          product.brytningsindex !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Brytningsindex
                      </div>
                      <div
                        className={
                          product.brytningsindex !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.brytningsindex}
                      </div>

                      <div
                        className={
                          product.lagstaflyttemp !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Lägstaflyttemp °C
                      </div>
                      <div
                        className={
                          product.lagstaflyttemp !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.lagstaflyttemp}
                      </div>

                      <div
                        className={
                          product.nlgi !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        NLGI
                      </div>
                      <div
                        className={
                          product.nlgi !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.nlgi}
                      </div>

                      <div
                        className={
                          product.tval !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Tvål
                      </div>
                      <div
                        className={
                          product.tval !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tval}
                      </div>

                      <div
                        className={
                          product.basolja40 !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Basolja cSt 40°C
                      </div>
                      <div
                        className={
                          product.basolja40 !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.basolja40}
                      </div>

                      <div
                        className={
                          product.tempomrade !== null
                            ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                            : `hidden`
                        }
                      >
                        Tempområde °C
                      </div>
                      <div
                        className={
                          product.tempomrade !== null
                            ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                            : `hidden`
                        }
                      >
                        {product.tempomrade}
                      </div>
                    </div>

                    <div className="grid mt-4 sm:grid-flow-col sm:auto-cols-max">
                      <div className="mr-4">
                        <p className="items-center md:flex-initial md:w-max">
                          <a
                            href={product.pds}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-2 my-1 text-sm font-medium text-center align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                          >
                            Ladda ner PDS
                          </a>
                        </p>
                      </div>

                      <div className="mr-4">
                        <p className="items-center md:flex-initial md:w-max">
                          <a
                            href={product.sds}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-2 my-1 text-sm font-medium text-center align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                          >
                            Ladda ner SDS
                          </a>
                        </p>
                      </div>

                      <div>
                        <p className="items-center md:flex-initial md:w-max">
                          <Link
                            to={`/products/${product.slug.current}`}
                            className="inline-block px-10 py-2 my-1 text-sm font-medium text-center align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                          >
                            Se produkt
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query categories($slug: String!) {
    categories: sanityProductCategory(slug: { current: { eq: $slug } }) {
      title
      id
      titleSwedish
      slug {
        current
      }
      product {
        id
        produkt
        _rawApplikationer
        sae
        farg
        isovg
        densitet
        kokpunkt
        brytningsindex
        viskositet40
        viskositet100
        vi
        flampunkt
        lagstaflyttemp
        pds
        sds
        newProduct
        nlgi
        tval
        basolja40
        tempomrade
        tbnbastal
        aromathalt
        slug {
          current
        }
      }
    }
  }
`;
