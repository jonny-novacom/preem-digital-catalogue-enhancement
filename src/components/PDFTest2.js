import React from "react";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import SpecSheetHavoline from "./SpecSheetHavoline";
const doc = new jsPDF();
const Foo = <SpecSheetHavoline />;

export default function PDFTest2() {
  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
      callback: () => {
        doc.save("myDocument.pdf");
      },
    });
  };

  return (
    <div>
      <button onClick={save}>save</button>
    </div>
  );
}
