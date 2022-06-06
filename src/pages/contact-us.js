import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import { FiPhone, FiMail } from "react-icons/fi";

// markup
export default function ContactPage({ data: { contactPageBanner } }) {
  const image = getImage(
    contactPageBanner.mainImage.asset.localFile.childImageSharp.gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    contactPageBanner.mainImage.asset.localFile.childImageSharp.resize.src;

  return (
    <>
      <SearchEngineOptimisation
        title="Preem"
        image={seoImage}
        description="Texaco smörjmedel säljs i Sverige av Preem, på Preems stationer och av Preems återförsäljare"
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
                  <h1 className="block mb-4 text-5xl font-bold leading-none text-white lg:text-7xl font-gothamNarrow md:text-55xl text-shadow-md md:mt-56">
                    {contactPageBanner.headerText}
                  </h1>
                </div>
                <div className="hidden col-span-8 md:col-span-2 md:block">
                  <GatsbyImage
                    image={
                      contactPageBanner.featuredImageHeader?.asset.localFile
                        .childImageSharp.gatsbyImageData
                    }
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt={contactPageBanner?.originalFilename}
                    className="block object-contain w-56 p-4 mx-auto lg:w-72 md:mt-12 lg:mt-2"
                  />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <div className="container pt-16 mx-auto">
            <StaticImage
              src="../images/icons/contact.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Mer information om smörjmedel Kundservice"
              transformOptions={"cover"}
              className="block w-20 mx-auto mb-4"
            />

            <h3 className="px-4 mb-4 text-2xl font-bold text-center text-preemGreen font-gothamNarrow">
              I Sverige ansvarar Preem för tillverkningen av Texaco smörjmedel
              från Chevron. Det innebär att vi har kontroll på hela kedjan, från
              produktion till leverans till våra kunder.
            </h3>

            <p className="px-4 mt-2 mb-12 font-normal text-center text-gray-500 text-md font-gothamNarrow">
              Tillverkningen sker i Scanlube, Preems smörjmedelsfabrik i
              Göteborg, där spårbarhet av råvaror och produkter finns i alla
              led. För forskning och utveckling har vi tillgång till all
              teknologi och erfarenhet som finns samlad i den internationella
              Chevronkoncernen. Det gör att vi kan erbjuda den svenska marknaden
              ett av världens bästa och beprövade smörjmedel.
            </p>
            <p className="px-4 mt-2 mb-3 text-2xl font-bold leading-9 text-center text-md text-preemGreen font-gothamNarrow">
              <span className="block font-bold">Kontakta oss här</span>
            </p>
            <div className="grid grid-cols-6 gap-2 mb-8">
              <div className="col-span-6 sm:col-span-3 md:col-span-2 md:col-start-2">
                <div className="p-4 bg-gray-100 rounded-2xl">
                  <FiPhone className="block mx-auto text-3xl text-preemYellow" />
                  <p className="mt-2 text-xl font-bold text-center font-gothamNarrow text-preemDarkGray">
                    010-450 19 00
                  </p>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-2">
                <div className="p-4 bg-gray-100 rounded-2xl">
                  <FiMail className="block mx-auto text-3xl text-preemYellow" />
                  <p className="mt-2 text-xl font-bold text-center font-gothamNarrow text-preemDarkGray">
                    <a href="mailto:smosupport@preem.se">smosupport@preem.se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query contactPageBanner {
    contactPageBanner: sanityBannerImages(
      title: { eq: "Contact Page Banner" }
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
