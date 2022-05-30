import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function ChemicalsCategories() {
  const { chemicalsCategories } = useStaticQuery(graphql`
    query {
      chemicalsCategories: allSanityProductCategory(
        filter: {
          title: {
            regex: "/(Fuel additive)|(Fuel for petrol engines)|(Fuel for diesel engines)|(AdBlue)|(Coolants and washer fluid)|(Brake Fluid)/"
          }
        }
        sort: { fields: titleSwedish, order: ASC }
      ) {
        nodes {
          title
          id
          titleSwedish
          slug {
            current
          }
        }
      }
    }
  `);

  const thechemicalsCategories = chemicalsCategories.nodes;

  return (
    <>
      <div className="px-4 py-8 mx-auto mb-12">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-1">
          {thechemicalsCategories.map((chemicalsCategories, i) => (
            <div
              key={i}
              className="grid items-center justify-center h-40 grid-rows-2 px-2 pt-4 pb-2 bg-gray-50"
            >
              <Link to={`/category/${chemicalsCategories.slug.current}`}>
                <span className="block font-bold leading-tight text-center font-gothamNarrow text-preemGreen">
                  {chemicalsCategories.titleSwedish}
                </span>
              </Link>
              <div className="block mx-auto text-center">
                <Link to={`/category/${chemicalsCategories.slug.current}`}>
                  <span className="inline-block px-6 py-2 text-sm font-medium text-center align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow">
                    För mer information
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
