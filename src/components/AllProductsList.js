import React from "react";
import BlockContent from "@sanity/block-content-to-react";

function SingleProductItem({ product }) {
  return (
    <div className="col-span-1 mb-4">
      <span className="font-gothamNarrow font-bold text-preemGreen text-xl mb-0.5">
        {product.title}
      </span>
      <span className="font-normal text-gray-500 font-gothamNarrow">
        <BlockContent
          blocks={product._rawDescription}
          projectId="1tbc9cjy"
          dataset="production"
        />
      </span>
    </div>
  );
}

export default function ProductsList({ productItems }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {productItems.map((product) => (
          <SingleProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
