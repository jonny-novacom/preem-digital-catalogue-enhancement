import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function CommercialCategories() {
  const { commercialCategories } = useStaticQuery(graphql`
    query {
      commercialCategories: allSanityProductCategory(
        filter: { title: { regex: "/(Motorcycle and 2-stroke oils)/" } }
        sort: { fields: title, order: ASC }
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

  const theCommercialCategories = commercialCategories.nodes;

  return (
    <>
      <div className="py-8 mx-auto mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link to="/product-category/engine-oils-heavy-vehicles">
            <div className="grid grid-rows-2 items-center justify-center h-32 bg-gray-50 px-2 py-4">
              <span className="text-center font-gothamNarrow font-bold text-preemGreen leading-tight block">
                Motoroljor tunga fordon
              </span>
              <span className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors">
                För mer information
              </span>
            </div>
          </Link>

          {theCommercialCategories.map((commercialCategories, i) => (
            <div key={i}>
              <Link to={`/category/${commercialCategories.slug.current}`}>
                <div className="grid grid-rows-2 items-center justify-center h-32 bg-gray-50 px-2 py-4">
                  <span className="text-center font-gothamNarrow font-bold text-preemGreen leading-tight block">
                    {commercialCategories.titleSwedish}
                  </span>
                  <span className="text-preemDarkGray py-2 px-10 hover:brightness-95 rounded-full font-gothamNarrow font-medium inline-block align-top bg-preemLightGray text-sm hover:text-preemGreen hover:bg-preemYellow transition-colors">
                    För mer information
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
