import * as React from "react";

import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";
import DownloadModal from "../components/DownloadModal";

// markup
export default function IndexPage({ data: { homePageBanner } }) {
  const image = getImage(
    homePageBanner.mainImage.asset.localFile.childImageSharp.gatsbyImageData
  );
  const bgImage = convertToBgImage(image);
  const seoImage =
    homePageBanner.mainImage.asset.localFile.childImageSharp.resize.src;
  // const isIos = () => {
  //   const userAgent = window.navigator.userAgent.toLowerCase();
  //   return /iphone|ipad|ipod/.test(userAgent);
  // };

  // const isInStandaloneMode = () =>
  //   "standalone" in window.navigator && window.navigator.standalone;

  // if (isIos() && !isInStandaloneMode()) {
  //   this.setState({ showInstallMessage: true });
  // }

  return (
    <>
      <SearchEngineOptimisation
        title="Preem"
        image={seoImage}
        description="Texaco smörjmedel säljs i Sverige av Preem, på Preems stationer och av Preems återförsäljare"
      />
      <div className="max-w-screen-lg mx-auto">
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
          className="h-screen bg-img-height"
        >
          <div className="grid content-between w-screen h-screen max-w-screen-lg grid-cols-1 gap-4 p-4 md:p-12">
            <div className="flex justify-end">
              <StaticImage
                src="../images/texaco-logo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Texaco"
                className="w-12 h-16 mr-6 mt-36"
              />
            </div>
            <div className="md:-mt-48">
              <h1 className="block mb-4 text-6xl font-bold text-white lg:text-7xl font-gothamNarrow text-shadow-md">
                Smörjmedel
              </h1>
              <h2 className="block w-11/12 text-3xl font-bold text-white font-gothamNarrow text-shadow-md">
                Texaco smörjmedel säljs i Sverige av Preem, på Preems stationer
                och av Preems återförsäljare
              </h2>
            </div>
            <div>
              {/* <span className="block border-t-2 border-white font-gothamNarrow">
                <span className="block mt-4 text-xl font-medium text-white">
                  Kem drivemedel bränsle – {new Date().getFullYear()}
                </span>
              </span> */}
            </div>
          </div>
        </BackgroundImage>
        <DownloadModal />
      </div>
    </>
  );
}

export const query = graphql`
  query homePageBanner {
    homePageBanner: sanityBannerImages(title: { eq: "Home Page Banner" }) {
      title
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
