import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Hr from "../utils/hr";

export default function AuthorisedDistributor() {
  return (
    <>
      <div className="container mx-auto">
        <Hr />
        <StaticImage
          src="../images/texaco-logo.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Texaco"
          className="block object-contain w-10 mx-auto "
        />
        <p className="mt-3 mb-8 font-medium text-center font-helvetica">
          Auktoriserad Texaco<sup>®</sup> Smörjmedelsdistributör
        </p>
        <p className="mt-3 mb-12 font-medium text-center font-gothamNarrow">
          Copyright © {new Date().getFullYear()} Preem AB. Med ensamrätt. |{" "}
          <a href="https://texaco.preem.se/texaco/" target="_blank">
            <span className="hover:text-preemYellow">texaco.preem.se</span>
          </a>
        </p>
      </div>
    </>
  );
}
