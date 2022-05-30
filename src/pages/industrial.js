import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

import IndustrialCarousel from "../components/product-carousels/Industrial";
import IndustrialCategories from "../components/IndustrialCategories";

// markup
export default function IndustrialPage({ data: { industrialPageBanner } }) {
  const image = getImage(
    industrialPageBanner.mainImage.asset.localFile.childImageSharp
      .gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    industrialPageBanner.mainImage.asset.localFile.childImageSharp.resize.src;

  return (
    <>
      <SearchEngineOptimisation
        title={industrialPageBanner.headerText}
        image={seoImage}
        description="För bättre operativ prestanda - Ser till att din utrustning fungerar på bästa sätt - Våra högpresterande industrismörjmedel ger utrustningen lång livslängd och hög produktivitet"
      />

      <div className="max-w-screen-lg mx-auto">
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="mt-24 bg-cover bg-img-height h-2/3"
        >
          <div className="p-8">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                transformOptions={"cover"}
                className="w-12 h-16 mt-12 mr-6"
              />
            </div>
          </div>

          <div className="p-8 md:pt-16">
            <div className="grid items-end grid-cols-8 gap-1 mt-12">
              <div className="col-span-8 md:col-span-6">
                <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-55xl text-shadow-md">
                  {industrialPageBanner.headerText}
                </h1>
              </div>
              <div className="hidden col-span-8 md:col-span-2 md:block">
                <GatsbyImage
                  image={
                    industrialPageBanner.featuredImageHeader?.asset.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={industrialPageBanner.originalFilename}
                  className="block object-contain w-56 p-4 mx-auto lg:w-72 md:mt-12 lg:mt-2"
                />
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="container pt-16 mx-auto">
          <StaticImage
            src="../images/icons/industrial.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Services"
            className="block w-12 mx-auto mb-4"
          />
        </div>
        <div className="my-8">
          <IndustrialCarousel />
        </div>
        <div className="mt-8">
          <IndustrialCategories />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query industrialPageBanner {
    industrialPageBanner: sanityBannerImages(
      title: { eq: "Industrial Page Banner" }
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
