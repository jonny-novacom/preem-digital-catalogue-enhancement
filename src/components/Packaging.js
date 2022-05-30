import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Packaging() {
  const { packaging } = useStaticQuery(graphql`
    query {
      packaging: allSanityPackagingCategory {
        nodes {
          title
          id
          packagingOrder {
            _rawPackagingCode
            _rawDescription
            title
            mainImage {
              asset {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const smorjolja = packaging.nodes[0].packagingOrder;

  const smorjfett = packaging.nodes[1].packagingOrder;

  const kemtekniskt = packaging.nodes[2].packagingOrder;

  const serializers = {
    marks: {
      strong: ({ children, mark }) =>
        mark.blank ? (
          { children }
        ) : (
          <span className="font-medium">{children}</span>
        ),
    },
  };

  return (
    <>
      <div className="py-4 mx-auto">
        <h3 className="mb-4 text-2xl font-medium text-center text-preemGreen font-gothamNarrow">
          Smörjolja
        </h3>
        <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
          {smorjolja.map((smorjolja, i) => (
            <React.Fragment key={i}>
              <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
                <div>
                  <p className="mb-0 font-medium">{smorjolja?.title}</p>
                  <SanityBlockContent
                    blocks={smorjolja?._rawDescription}
                    projectId="1tbc9cjy"
                    dataset="production"
                    serializers={serializers}
                  />
                </div>
                <div>
                  <p className="mb-0">
                    <SanityBlockContent
                      blocks={smorjolja?._rawPackagingCode}
                      projectId="1tbc9cjy"
                      dataset="production"
                      serializers={serializers}
                    />
                  </p>
                </div>
              </div>
              <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
                <div>
                  <GatsbyImage
                    image={
                      smorjolja?.mainImage.asset.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={smorjolja?.title}
                    objectFit="contain"
                    className="block h-auto mx-auto w-52"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="py-4 mx-auto">
        <h3 className="mb-4 text-2xl font-medium text-center text-preemGreen font-gothamNarrow">
          Smörjfett
        </h3>
        <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
          {smorjfett.map((smorjfett, i) => (
            <React.Fragment key={i}>
              <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
                <div>
                  <p className="mb-0 font-medium">{smorjfett?.title}</p>
                  <SanityBlockContent
                    blocks={smorjfett?._rawDescription}
                    projectId="1tbc9cjy"
                    dataset="production"
                    serializers={serializers}
                  />
                </div>
                <div>
                  <p className="mb-0">
                    <SanityBlockContent
                      blocks={smorjfett?._rawPackagingCode}
                      projectId="1tbc9cjy"
                      dataset="production"
                      serializers={serializers}
                    />
                  </p>
                </div>
              </div>
              <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
                <div>
                  <GatsbyImage
                    image={
                      smorjfett?.mainImage.asset.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={smorjfett?.title}
                    objectFit="contain"
                    className="block h-auto mx-auto w-52"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="py-4 mx-auto">
        <h3 className="mt-12 mb-4 text-2xl font-medium text-center text-preemGreen font-gothamNarrow">
          Kemtekniskt emballage
        </h3>
        <div className="grid grid-cols-1 border-t-8 border-black md:grid-cols-5">
          {kemtekniskt.map((kemtekniskt, i) => (
            <React.Fragment key={i}>
              <div className="grid content-between grid-cols-1 gap-4 p-4 border-b-2 border-white md:h-52 bg-gray-50 md:col-span-3">
                <div>
                  <p className="mb-0 font-medium">{kemtekniskt?.title}</p>
                  <SanityBlockContent
                    blocks={kemtekniskt?._rawDescription}
                    projectId="1tbc9cjy"
                    dataset="production"
                    serializers={serializers}
                  />
                </div>
                <div>
                  <p className="mb-0">
                    <SanityBlockContent
                      blocks={kemtekniskt?._rawPackagingCode}
                      projectId="1tbc9cjy"
                      dataset="production"
                      serializers={serializers}
                    />
                  </p>
                </div>
              </div>
              <div className="grid content-center grid-cols-1 gap-4 p-4 bg-gray-200 border-b-2 border-white md:h-52 md:col-span-2">
                <div>
                  <GatsbyImage
                    image={
                      kemtekniskt?.mainImage.asset.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={kemtekniskt?.title}
                    objectFit="contain"
                    className="block h-auto mx-auto w-52"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
