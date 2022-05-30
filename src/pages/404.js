import { Link } from "gatsby";
import React from "react";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function NotFoundPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Sidan hittas inte"
        image=""
        description="404 – sidan du letade efter finns inte"
      />
      <div className="mt-44">
        <h1 className="block mb-2 text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
          404 – sidan du letade efter finns inte
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid px-3 pb-24 place-items-center">
          <div className="w-auto">
            <p className="my-4 lg:items-center lg:flex-initial lg:w-max sm:w-full">
              <Link
                to="/"
                className="inline-block px-10 py-2 my-1 text-sm font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
              >
                tillbaka till startsidan
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
