import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export default function PowerGenCarousel() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GoChevronRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333333",
          height: "1.5rem",
          width: "1.5rem",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GoChevronLeft
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333333",
          height: "1.5rem",
          width: "1.5rem",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { powergenproductcarousel } = useStaticQuery(graphql`
    query {
      powergenproductcarousel: allSanityProduct(
        sort: { fields: produkt, order: ASC }
        filter: {
          featured: { eq: true }
          productCategory: {
            elemMatch: {
              title: {
                regex: "/(Turbine and circulation oils)|(Stationary gas engines)/"
              }
            }
          }
        }
      ) {
        nodes {
          produkt
          id
          shortDescription
          sae
          slug {
            current
          }
          mainImage {
            asset {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          productCategory {
            title
          }
        }
      }
    }
  `);

  const thepowergenproductcarousel = powergenproductcarousel.nodes;
  return (
    <div className="px-10">
      <Slider {...settings}>
        {thepowergenproductcarousel.map((powergenproductcarousel, i) => (
          <div className="p-1 bg-white" key={i}>
            <div className="p-4 bg-gray-50">
              <Link to={`/products/${powergenproductcarousel.slug.current}`}>
                {powergenproductcarousel.newProduct ? (
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
                    powergenproductcarousel.mainImage.asset.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  alt={powergenproductcarousel.produkt}
                  className="block mx-auto"
                  imgStyle={{ objectFit: "contain" }}
                />
                <h3 className="h-12 mt-2 overflow-hidden text-lg font-bold leading-snug text-center text-preemGreen font-gothamNarrow text-clip">
                  {powergenproductcarousel.produkt}
                </h3>
              </Link>
              <span className="block h-20 mt-2 mb-4 text-sm font-normal leading-snug text-center text-preemMediumGray font-gothamNarrow">
                {powergenproductcarousel.shortDescription}
              </span>
              <div className="block mx-auto text-center">
                <Link to={`/products/${powergenproductcarousel.slug.current}`}>
                  <span className="inline-block px-10 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow">
                    För mer information
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
