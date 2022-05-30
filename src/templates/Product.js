import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import SanityBlockContent from "@sanity/block-content-to-react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import { RiArchiveLine } from "react-icons/ri";

export default function SingleProductPage({ data: { produkt } }) {
  return (
    <>
      <div key={produkt.id}>
        <SearchEngineOptimisation
          title={`${produkt.produkt} ${
            produkt.sae !== null ? produkt.sae : ""
          }`}
          image={produkt?.mainImage?.asset.url}
          description={produkt.shortDescription}
        />
        <div className="max-w-screen-md mx-auto">
          <div className="mt-36">
            <h1 className="block mb-2 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
              {produkt.produkt}{" "}
              {/* {produkt.sae ? <span>SAE {produkt.sae}</span> : ""} */}
            </h1>
            <h3 className="px-6 mt-2 text-lg font-medium text-center text-gray-500 font-gothamNarrow">
              {produkt.shortDescription}
            </h3>
            {produkt.newProduct ? (
              <div className="flex justify-end">
                <div className="w-12 h-12 -mb-16 font-bold text-center rounded-full text-preemGreen bg-preemYellow ml-auto mr-[33%] mt-2">
                  <span className="block pt-1 mt-2">NY!</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {produkt.archived ? (
              <div className="flex justify-end">
                <div className="w-12 h-12 -mb-16 font-bold text-center rounded-full text-preemGreen bg-preemYellow ml-auto mr-[33%] mt-2">
                  <span className="block mt-2">
                    <RiArchiveLine className="mt-1 ml-[9px] text-3xl" />
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <GatsbyImage
              image={
                produkt.mainImage.asset.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={produkt.produkt}
              objectFit="contain"
              className="block w-64 h-64 p-4 mx-auto mt-4"
            />
          </div>
          <div className="px-6 mt-3 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
            <SanityBlockContent
              blocks={produkt._rawApplikationer}
              projectId="1tbc9cjy"
              dataset="production"
            />
          </div>
          <div className="grid grid-cols-5 gap-2 px-6">
            <div
              className={
                produkt.sae !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              SAE
            </div>
            <div
              className={
                produkt.sae !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.sae}
            </div>
            <div
              className={
                produkt.farg !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Färg
            </div>
            <div
              className={
                produkt.farg !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.farg}
            </div>

            <div
              className={
                produkt.aromathalt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Aromathalt %
            </div>
            <div
              className={
                produkt.aromathalt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.aromathalt}
            </div>

            <div
              className={
                produkt.kokpunkt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Kokpunkt (koncentrat)
            </div>
            <div
              className={
                produkt.kokpunkt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.kokpunkt}
            </div>

            <div
              className={
                produkt.fryspunkt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Fryspunkt °C
            </div>
            <div
              className={
                produkt.fryspunkt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.fryspunkt}
            </div>

            <div
              className={
                produkt.isovg !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              ISO VG
            </div>
            <div
              className={
                produkt.isovg !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.isovg}
            </div>

            <div
              className={
                produkt.densitet !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Densitet kg/m³
            </div>
            <div
              className={
                produkt.densitet !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.densitet}
            </div>
            <div
              className={
                produkt.viskositet40 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Viskositet cSt, mm²/s 40°C
            </div>
            <div
              className={
                produkt.viskositet40 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.viskositet40}
            </div>

            <div
              className={
                produkt.viskositet100 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Viskositet cSt, mm²/s 100°C
            </div>
            <div
              className={
                produkt.viskositet100 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.viskositet100}
            </div>

            <div
              className={
                produkt.vi !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              VI
            </div>
            <div
              className={
                produkt.vi !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.vi}
            </div>

            <div
              className={
                produkt.tbnbastal !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              TBN Bastal
            </div>
            <div
              className={
                produkt.tbnbastal !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tbnbastal}
            </div>

            <div
              className={
                produkt.flampunkt !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Flampunkt °C
            </div>
            <div
              className={
                produkt.flampunkt !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.flampunkt}
            </div>

            <div
              className={
                produkt.brytningsindex !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Brytningsindex
            </div>
            <div
              className={
                produkt.brytningsindex !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.brytningsindex}
            </div>

            <div
              className={
                produkt.lagstaflyttemp !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Lägstaflyttemp °C
            </div>
            <div
              className={
                produkt.lagstaflyttemp !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.lagstaflyttemp}
            </div>

            <div
              className={
                produkt.nlgi !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              NLGI
            </div>
            <div
              className={
                produkt.nlgi !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.nlgi}
            </div>

            <div
              className={
                produkt.tval !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Tvål
            </div>
            <div
              className={
                produkt.tval !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tval}
            </div>

            <div
              className={
                produkt.basolja40 !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Basolja cSt 40°C
            </div>
            <div
              className={
                produkt.basolja40 !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.basolja40}
            </div>

            <div
              className={
                produkt.tempomrade !== null
                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                  : `hidden`
              }
            >
              Tempområde °C
            </div>
            <div
              className={
                produkt.tempomrade !== null
                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                  : `hidden`
              }
            >
              {produkt.tempomrade}
            </div>
          </div>
          <div className="grid px-4 mt-4 sm:grid-flow-col sm:auto-cols-max no-print">
            <div className="mr-4">
              <p className="items-center md:flex-initial md:w-max">
                <a
                  href={produkt.pds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                >
                  Ladda ner PDS
                </a>
              </p>
            </div>
            <div className="mr-4">
              <p className="items-center md:flex-initial md:w-max">
                <a
                  href={produkt.sds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                >
                  Ladda ner SDS
                </a>
              </p>
            </div>
            <div>
              <button
                onClick={() => window.print()}
                className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
              >
                Skriv ut den här sidan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query produkts($slug: String!) {
    produkt: sanityProduct(slug: { current: { eq: $slug } }) {
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
      nlgi
      tval
      basolja40
      tempomrade
      tbnbastal
      aromathalt
      fryspunkt
      shortDescription
      newProduct
      archived
      slug {
        current
      }
      mainImage {
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          url
        }
      }
    }
  }
`;
