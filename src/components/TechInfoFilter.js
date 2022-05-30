import { Link } from "gatsby";
import React from "react";

export default function TechInfoFilter() {
  return (
    <div className="fixed z-40 w-screen px-4 py-4 mb-8 text-center bg-white top-32">
      <Link to="/technical-information#acea">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          ACEA
        </span>
      </Link>
      <Link to="/technical-information#api">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          API
        </span>
      </Link>
      <Link to="/technical-information#sae">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          SAE
        </span>
      </Link>
      <Link to="/technical-information#nlgi">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          NLGI
        </span>
      </Link>
      <Link to="/technical-information#iso">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          ISO
        </span>
      </Link>
      <Link to="/technical-information#euro">
        <span className="inline-block px-2 text-2xl font-bold uppercase font-gothamNarrow text-preemYellow">
          Euro
        </span>
      </Link>
    </div>
  );
}
