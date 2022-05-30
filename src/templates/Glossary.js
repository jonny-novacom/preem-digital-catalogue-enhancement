import SanityBlockContent from "@sanity/block-content-to-react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import GlossaryFilter from "../components/GlossaryFilter";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

function GlossaryPageTemplate({ data: { glossaryCategories } }) {
  return (
    <>
      <SearchEngineOptimisation
        title="Ord och förkortningar"
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="px-4 mt-40">
          <div className="container mx-auto">
            <StaticImage
              src="../images/icons/glossary.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Glossary"
              transformOptions={"cover"}
              className="block w-12 mx-auto mb-4"
            />
            <h3 className="mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Ord och förkortningar
            </h3>
          </div>
          <GlossaryFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            {glossaryCategories.nodes.map((glossary, i) => (
              <div className="col-span-1 mb-4" key={i}>
                <span className="font-gothamNarrow font-bold text-preemGreen text-xl mb-0.5">
                  {glossary.title}
                </span>
                <span className="font-normal text-gray-500 font-gothamNarrow">
                  <SanityBlockContent
                    blocks={glossary._rawDescription}
                    projectId="1tbc9cjy"
                    dataset="production"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query GlossaryQueryPage($glossCat: String!) {
    glossaryCategories: allSanityGlossary(
      sort: { fields: title, order: ASC }
      filter: {
        glossarycat: { elemMatch: { slug: { current: { eq: $glossCat } } } }
      }
    ) {
      nodes {
        id
        title
        _rawDescription
        glossarycat {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

export default GlossaryPageTemplate;
