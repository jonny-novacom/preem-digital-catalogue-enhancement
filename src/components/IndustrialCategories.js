import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function IndustrialCategories() {
  const { industrialCategories } = useStaticQuery(graphql`
    query {
      industrialCategories: allSanityProductCategory(
        filter: {
          title: {
            regex: "/(Form oils)|(Hydraulic oils)|(Industrial gear oils)|(Compressor and air tool oils)|(Refrigeration compressor oils)|(Turbine and circulation oils)|(Guide oils, saw chain oils)|(Process, white, transformer and heat transfer oils)|(Metalworking, rust protection)|(Bearing greases)|(Synthetic greases)|(Sliding surfaces, chassis and teeth greases)|(Cold degreasers and solvents)|(Food grade NSF H1 greases)|(Stationary gas engines)/"
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

  const theIndustrialCategories = industrialCategories.nodes;

  return (
    <>
      <div className="px-4 py-8 mx-auto mb-12">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 sm:grid-cols-3">
          {theIndustrialCategories.map((industrialCategories, i) => (
            <div
              key={i}
              className="grid items-center justify-center h-40 grid-rows-2 px-2 pt-4 pb-2 bg-gray-50"
            >
              <Link to={`/category/${industrialCategories.slug.current}`}>
                <span className="block font-bold leading-tight text-center font-gothamNarrow text-preemGreen">
                  {industrialCategories.titleSwedish}
                </span>
              </Link>
              <div className="block mx-auto text-center">
                <Link to={`/category/${industrialCategories.slug.current}`}>
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
