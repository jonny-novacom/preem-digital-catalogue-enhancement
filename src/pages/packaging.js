import * as React from "react";
import Packaging from "../components/Packaging";
import SearchEngineOptimisation from "../components/SearchEngineOptimisation";

export default function PackagingPage() {
  return (
    <>
      <SearchEngineOptimisation
        title="Emballage smörjmedel och kemtekniska produkter"
        image=""
        description=""
      />

      <div className="max-w-screen-md mx-auto">
        <div className="px-4 mt-40 mb-12">
          <h1 className="block text-3xl font-bold text-center font-gothamNarrow text-preemGreen">
            Emballage smörjmedel och kemtekniska produkter
          </h1>
          <Packaging />
        </div>
      </div>
    </>
  );
}
