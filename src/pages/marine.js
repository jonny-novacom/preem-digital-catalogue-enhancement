import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import MarineCarousel from "../components/product-carousels/Marine";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

export default function MarinePage({ data: { marinePageBanner } }) {
  const image = getImage(
    marinePageBanner.mainImage.asset.localFile.childImageSharp.gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    marinePageBanner.mainImage.asset.localFile.childImageSharp.resize.src;

  return (
    <>
      <SearchEngineOptimisation
        title={marinePageBanner.headerText}
        image={seoImage}
        description="Optimerad tillförlitlighet och skydd -  Vårt breda utbud av marina produkter erbjuder optimal tillförlitlighet, skydd och prestanda."
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
                    {marinePageBanner.headerText}
                  </h1>
                </div>
                <div className="hidden col-span-8 md:col-span-2 md:block">
                  <GatsbyImage
                    image={
                      marinePageBanner.featuredImageHeader?.asset.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt={marinePageBanner?.originalFilename}
                    className="block object-contain w-56 p-4 mx-auto lg:w-64 md:mt-12 lg:mt-2"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/marine.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marine"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
          </div>
          <div className="my-8">
            <MarineCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <a href="/category/marine-engine-oils">
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
  query marinePageBanner {
    marinePageBanner: sanityBannerImages(title: { eq: "Marine Page Banner" }) {
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
              resize {
                src
              }
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
