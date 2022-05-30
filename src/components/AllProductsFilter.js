import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default function AllProductsFilter() {
  const { allProductsCats } = useStaticQuery(graphql`
    query {
      allProductsCats: allSanityAllProductsCategory(
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
      <Link to="/all-products">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          alla
        </span>
      </Link>
      {allProductsCats.nodes.map((cats) => (
        <Link
          to={`/all-products/${cats.slug.current}`}
          key={cats.id}
          className={
            cats.title === "e" ||
            cats.title === "f" ||
            cats.title === "i" ||
            cats.title === "j" ||
            cats.title === "l" ||
            cats.title === "q" ||
            cats.title === "v" ||
            cats.title === "w" ||
            cats.title === "x" ||
            cats.title === "y" ||
            cats.title === "z"
              ? `pointer-events-none grayscale`
              : ""
          }
        >
          <span className="inline-block px-2 text-2xl font-bold uppercase rounded-full font-gothamNarrow text-preemYellow">
            {cats.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
