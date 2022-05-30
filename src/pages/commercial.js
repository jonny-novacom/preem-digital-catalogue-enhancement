import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import CommercialCarousel from "../components/product-carousels/Commercial";

// markup
export default function CommercialPage({ data: { commercialPageBanner } }) {
  const image = getImage(
    commercialPageBanner.mainImage.asset.localFile.childImageSharp
      .gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    commercialPageBanner.mainImage.asset.localFile.childImageSharp.resize.src;

  return (
    <>
      <SearchEngineOptimisation
        title={commercialPageBanner.headerText}
        image={seoImage}
        description="Komplett utbud för hela fordonsflottan - Vårt kompletta utbud av motorolja, kylarvätska och tillhörande produkter för att hålla igång ditt företag"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-40">
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
            className="mt-6 bg-cover bg-img-height h-3/4"
          >
            <div className="p-8">
              <div className="flex justify-end">
                <StaticImage
                  src="../images/texaco-logo.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Texaco"
                  transformOptions={"cover"}
                  className="w-12 h-16"
                />
              </div>
            </div>
            <div className="p-8 md:pt-16">
              <div className="grid items-end grid-cols-8 gap-1 mt-12">
                <div className="col-span-8 md:col-span-5">
                  <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-6xl text-shadow-md ">
                    {commercialPageBanner.headerText}
                  </h1>
                </div>
                <div className="hidden col-span-8 md:col-span-3 md:block">
                  <GatsbyImage
                    image={
                      commercialPageBanner.featuredImageHeader.asset.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt={commercialPageBanner.originalFilename}
                    className="block object-contain w-56 p-4 mx-auto lg:w-72 md:mt-12 lg:mt-2"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/commercial.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Services"
              className="block w-20 mx-auto mb-4"
            />
          </div>
          <div className="my-8">
            <CommercialCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <a href="/product-category/engine-oils-heavy-vehicles">
              <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                Visa alla produkter
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query commercialPageBanner {
    commercialPageBanner: sanityBannerImages(
      title: { eq: "Commercial Page Banner" }
    ) {
      title
      headerText
      featuredImageHeader {
        asset {
          originalFilename
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
      mainImage {
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              resize {
                src
              }
            }
          }
        }
      }
    }
  }
`;
