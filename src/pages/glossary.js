import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import GlossaryFilter from "../components/GlossaryFilter";
import GlossaryList from "../components/GlossaryList";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function GlossaryPage({ data }) {
  const glossaryItems = data.glossaryItems.nodes;
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
              alt="Marine"
              transformOptions={"cover"}
              className="block w-12 mx-auto mb-4"
            />
            <h3 className="mb-8 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Ord och förkortningar
            </h3>
          </div>
          <GlossaryFilter />
          <GlossaryList glossaryItems={glossaryItems} />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query GlossaryQuery {
    glossaryItems: allSanityGlossary(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        _rawDescription
        glossarycat {
          id
          title
        }
      }
    }
  }
`;
