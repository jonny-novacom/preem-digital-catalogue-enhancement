import * as React from "react";

import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import ConsumerCarousel from "../components/product-carousels/Consumer";

// markup
export default function ConsumerPage({ data: { consumerPageBanner } }) {
  const image = getImage(
    consumerPageBanner.mainImage.asset.localFile.childImageSharp
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    consumerPageBanner.mainImage.asset.localFile.childImageSharp.resize.src;

  return (
    <>
      <SearchEngineOptimisation
        title={consumerPageBanner.headerText}
        image={seoImage}
        description="Oavsett resa, oavsett väder -  Brett utbud av OEM-godkända smörjmedel till personbilar och lätta transportfordon"
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
                <div className="col-span-8 md:col-span-6">
                  <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-55xl text-shadow-md">
                    {consumerPageBanner.headerText}
                  </h1>
                </div>
                <div className="hidden col-span-8 md:col-span-2 md:block">
                  <GatsbyImage
                    image={
                      consumerPageBanner.featuredImageHeader.asset.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt={consumerPageBanner.originalFilename}
                    className="block object-contain w-56 p-4 mx-auto lg:w-72 md:mt-12 lg:mt-2"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/consumer.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Consumer"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
          </div>
          <div className="my-8">
            <ConsumerCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <Link to="/product-category/engine-oils-passenger-cars-and-light-transport-vehicles">
              <span className="inline-block px-16 py-2 font-medium align-top rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow">
                Visa alla produkter
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query consumerPageBanner {
    consumerPageBanner: sanityBannerImages(
      title: { eq: "Consumer Page Banner" }
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
