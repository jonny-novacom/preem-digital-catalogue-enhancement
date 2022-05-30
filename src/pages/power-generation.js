import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import PowerGenCarousel from "../components/product-carousels/PowerGen";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

export default function PowerGenerationPage({ data: { powergenPageBanner } }) {
  const image = getImage(
    powergenPageBanner.mainImage.asset.localFile.childImageSharp.gatsbyImageData
  );
  const bgImage = convertToBgImage(image);

  return (
    <>
      <SearchEngineOptimisation
        title="Preem Digital Catalogue"
        image=""
        description=""
      />
      <div className="max-w-screen-lg mx-auto mb-12">
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
            <div className="p-8 md:pt-48">
              <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-6xl text-shadow-md mt:8 lg:w-3/4 md:w-10/12">
                Min nis di nusam quaepti ipsam que
              </h1>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/power-gen.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Power Generation"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum
            </h3>
            <p className="mt-2 mb-12 font-normal text-center text-gray-500 text-md font-gothamNarrow">
              Min nis di ditinctate nusam quaepti ipsam que voluptum, quossunt
              volorem perupta audipis explibus
            </p>
          </div>
          <div className="my-8">
            <PowerGenCarousel />
          </div>
          <div className="block mx-auto mb-8 text-center">
            <Link to="/category/stationary-gas-engines">
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
  query powergenPageBanner {
    powergenPageBanner: sanityBannerImages(
      title: { eq: "PowerGen Page Banner" }
    ) {
      title
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
`;
