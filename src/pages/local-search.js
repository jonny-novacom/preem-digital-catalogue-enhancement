import React, { useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Accordion } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

const LocalSearch = () => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchProducts {
        index
        store
      }
    }
  `);
  const index = queryData.localSearchProducts.index;
  const store = queryData.localSearchProducts.store;

  const [query, setQuery] = useState("");
  const results = useFlexSearch(query, index, store);

  results.sort((a, b) =>
    a.produkt > b.produkt ? 1 : b.produkt > a.produkt ? -1 : 0
  );

  return (
    <>
      <SearchEngineOptimisation
        title="Search"
        image=""
        description="Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt volorem perupta audipis explibus"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 mb-20 mt-36">
          <h1 className="block mb-4 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            Search
          </h1>
          <div className="container flex justify-center mx-auto">
            <div className="flex border-1">
              <button className="flex items-center justify-center px-3 border-r bg-preemGreen">
                <IoSearchOutline className="block text-2xl text-white" />
              </button>
              <input
                type="text"
                className="px-4 py-3 sm:w-72 md:w-96 font-gothamNarrow focus:outline-none"
                placeholder="Search..."
                name="query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <h2 className="block mt-8 mb-4 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            Results
          </h2>
          {results.length > 0 && (
            <div>
              {results.map((result) => (
                <Accordion className="inner innersearch" key={result.id}>
                  <Accordion.Item eventKey={result.id}>
                    <Accordion.Header>{result.produkt}</Accordion.Header>
                    <Accordion.Body>
                      <div className="pt-2 pl-10 pr-4">
                        <div className="mt-2 mb-4 font-normal text-left text-gray-500 text-md font-gothamNarrow">
                          <p className="mb-4">{result.body}</p>
                          <div className="grid grid-cols-5 gap-2">
                            <div
                              className={
                                result.sae !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              SAE
                            </div>
                            <div
                              className={
                                result.sae !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.sae}
                            </div>
                            <div
                              className={
                                result.farg !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Färg
                            </div>

                            <div
                              className={
                                result.farg !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.farg}
                            </div>

                            <div
                              className={
                                result.kokpunkt !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Kokpunkt (koncentrat)
                            </div>
                            <div
                              className={
                                result.kokpunkt !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.kokpunkt}
                            </div>

                            <div
                              className={
                                result.fryspunkt !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Fryspunkt °C
                            </div>
                            <div
                              className={
                                result.fryspunkt !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.fryspunkt}
                            </div>

                            <div
                              className={
                                result.isovg !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              ISO VG
                            </div>
                            <div
                              className={
                                result.isovg !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.isovg}
                            </div>

                            <div
                              className={
                                result.densitet !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Densitet kg/m³
                            </div>
                            <div
                              className={
                                result.densitet !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.densitet}
                            </div>

                            <div
                              className={
                                result.viskositet40 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Viskositet cSt, mm²/s 40°C
                            </div>
                            <div
                              className={
                                result.viskositet40 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.viskositet40}
                            </div>

                            <div
                              className={
                                result.viskositet100 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Viskositet cSt, mm²/s 100°C
                            </div>
                            <div
                              className={
                                result.viskositet100 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.viskositet100}
                            </div>

                            <div
                              className={
                                result.vi !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              VI
                            </div>
                            <div
                              className={
                                result.vi !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.vi}
                            </div>

                            <div
                              className={
                                result.tbnbastal !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              TBN Bastal
                            </div>
                            <div
                              className={
                                result.tbnbastal !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tbnbastal}
                            </div>

                            <div
                              className={
                                result.flampunkt !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Flampunkt °C
                            </div>
                            <div
                              className={
                                result.flampunkt !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.flampunkt}
                            </div>

                            <div
                              className={
                                result.brytningsindex !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Brytningsindex
                            </div>
                            <div
                              className={
                                result.brytningsindex !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.brytningsindex}
                            </div>

                            <div
                              className={
                                result.lagstaflyttemp !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Lägstaflyttemp °C
                            </div>
                            <div
                              className={
                                result.lagstaflyttemp !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.lagstaflyttemp}
                            </div>

                            <div
                              className={
                                result.nlgi !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              NLGI
                            </div>
                            <div
                              className={
                                result.nlgi !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.nlgi}
                            </div>

                            <div
                              className={
                                result.tval !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Tvål
                            </div>
                            <div
                              className={
                                result.tval !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tval}
                            </div>

                            <div
                              className={
                                result.basolja40 !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Basolja cSt 40°C
                            </div>
                            <div
                              className={
                                result.basolja40 !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.basolja40}
                            </div>

                            <div
                              className={
                                result.tempomrade !== null
                                  ? `font-gothamNarrow font-bold text-left text-md text-gray-700 block md:col-span-2 col-span-3`
                                  : `hidden`
                              }
                            >
                              Tempområde °C
                            </div>
                            <div
                              className={
                                result.tempomrade !== null
                                  ? `text-left text-gray-500 text-md font-gothamNarrow font-normal md:col-span-3 col-span-2`
                                  : `hidden`
                              }
                            >
                              {result.tempomrade}
                            </div>
                          </div>
                          <div className="grid mt-4 sm:grid-flow-col sm:auto-cols-max">
                            <div className="mr-4">
                              <p className="items-center md:flex-initial md:w-max">
                                <a
                                  href={result.pds}
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
                                  href={result.sds}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                                >
                                  Ladda ner SDS
                                </a>
                              </p>
                            </div>
                            <div>
                              <p className="items-center md:flex-initial md:w-max">
                                <Link
                                  to={`/products/${result.path}`}
                                  className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
                                >
                                  Se produkt
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </div>
          )}{" "}
          {query.length >= 1 && results.length === 0 && (
            <p className="block mt-2 mb-4 text-xl font-bold text-center font-gothamNarrow">
              No results!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LocalSearch;
