import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function GlossaryFilter() {
  const { glossaryCats } = useStaticQuery(graphql`
    query {
      glossaryCats: allSanityGlossaryCategory(
        sort: { fields: title, order: ASC }
      ) {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <div className="mb-8 text-center">
      {glossaryCats.nodes.map((cats) => (
        <Link
          to={`/glossary/${cats.slug.current}`}
          key={cats.id}
          className={
            cats.title === "j" ||
            cats.title === "q" ||
            cats.title === "w" ||
            cats.title === "x" ||
            cats.title === "y" ||
            cats.title === "z"
              ? `pointer-events-none grayscale`
              : ""
          }
        >
          <span className="font-gothamNarrow font-bold text-preemYellow text-2xl px-2 uppercase inline-block">
            {cats.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
