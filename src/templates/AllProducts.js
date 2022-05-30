import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import AllProductsFilter from "../components/AllProductsFilter";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

function AllProductsPageTemplate({ data: { allProductsCategories } }) {
  const allTheProductsCategories = allProductsCategories.nodes;

  return (
    <>
      <SearchEngineOptimisation
        title={`Alla produkter - Sida ${allProductsCategories.nodes[0]?.allProductsCategory[0].title.toUpperCase()}`}
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <div className="container mx-auto">
            <StaticImage
              src="../images/icons/all-products.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="All products"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-2"
            />
            <h2 className="mb-2 text-5xl font-bold text-center uppercase text-preemGreen font-gothamNarrow">
              {allProductsCategories.nodes[0]?.allProductsCategory[0].title}
            </h2>
          </div>
          <AllProductsFilter />

          <div className="grid items-center grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 outline outline-4 outline-white neg-outline-offset">
            {allTheProductsCategories
              .filter((product) => product.archived === null)
              .map((product) => (
                <div key={product.id} className="p-4 border border-gray-300">
                  <Link to={`/products/${product.slug.current}`}>
                    <div className="relative h-10">
                      <div className="absolute inset-0 flex items-center justify-center mb-2 text-lg font-bold text-center font-gothamNarrow text-preemGreen line-clamp-1">
                        {product.produkt}
                      </div>
                    </div>
                    {product.newProduct ? (
                      <div className="flex justify-end">
                        <div className="w-12 h-12 -mb-12 font-bold text-center rounded-full text-preemGreen bg-preemYellow">
                          <span className="block pt-1 mt-2">NY!</span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <GatsbyImage
                      image={
                        product.mainImage.asset.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={product.produkt}
                      className="block mx-auto"
                      style={{ height: "180px" }}
                      imgStyle={{ objectFit: "contain" }}
                    />
                    <span className="block mt-1 mb-2 text-center h-18 font-gothamNarrow line-clamp-3">
                      {product.shortDescription}
                    </span>
                    <div className="block mx-auto text-center">
                      <span className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow">
                        För mer information
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query allProductsQueryPage($allProductsCat: String!) {
    allProductsCategories: allSanityProduct(
      sort: { fields: produkt, order: ASC }
      filter: {
        allProductsCategory: {
          elemMatch: { slug: { current: { eq: $allProductsCat } } }
        }
      }
    ) {
      nodes {
        produkt
        id
        shortDescription
        newProduct
        archived
        slug {
          current
        }
        allProductsCategory {
          title
          slug {
            current
          }
        }
        mainImage {
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default AllProductsPageTemplate;
