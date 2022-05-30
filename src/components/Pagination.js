import { Link } from "gatsby";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  console.log(String.fromCharCode(totalPages));

  return (
    <>
      <div className="flex items-center content-center justify-between place-items-center">
        <p className="items-center flex-initial my-4 w-max">
          <Link
            className="hidden px-10 py-2 text-sm font-medium transition rounded-full text-preemDarkGray md:flex bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
            to={`${base}/${prevPage}`}
            disabled={!hasPrevPage}
          >
            <BsArrowLeft className="mr-2 mt-0.5 text-lg" /> Föregående sida
          </Link>
        </p>
        <div className="flex flex-wrap content-center justify-center current:text-white">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Link
              className={currentPage === 1 && i === 0 ? `h-8 current` : ""}
              to={`${base}/${i > 0 ? i + 1 : ""}`}
              key={`page${i}`}
            >
              <span className="inline-block w-8 h-8 pt-1 m-1 font-medium text-center transition rounded-full bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow text-preemDarkGray current">
                {i + 1}
              </span>
            </Link>
          ))}
        </div>
        <p className="items-center flex-initial my-4 text-right w-max">
          <Link
            className="hidden px-10 py-2 text-sm font-medium transition rounded-full text-preemDarkGray md:flex bg-preemLightGray hover:text-preemGreen hover:bg-preemYellow"
            to={`${base}/${nextPage}`}
            disabled={!hasNextPage}
          >
            Nästa sida <BsArrowRight className="ml-2 mt-0.5 text-lg" />
          </Link>
        </p>
      </div>
    </>
  );
}
