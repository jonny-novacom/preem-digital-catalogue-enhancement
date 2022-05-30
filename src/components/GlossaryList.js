import React from "react";
import BlockContent from "@sanity/block-content-to-react";

function SingleGlossaryItem({ glossary }) {
  return (
    <div className="col-span-1 mb-4">
      <span className="font-gothamNarrow font-bold text-preemGreen text-xl mb-0.5">
        {glossary.title}
      </span>
      <span className="font-gothamNarrow font-normal text-gray-500">
        <BlockContent
          blocks={glossary._rawDescription}
          projectId="1tbc9cjy"
          dataset="production"
        />
      </span>
    </div>
  );
}

export default function GlossaryList({ glossaryItems }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {glossaryItems.map((glossary) => (
          <SingleGlossaryItem glossary={glossary} key={glossary.id} />
        ))}
      </div>
    </>
  );
}
