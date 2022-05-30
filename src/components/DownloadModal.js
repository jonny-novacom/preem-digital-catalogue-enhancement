import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function DownloadModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rounded-3xl"
        onEnter={function () {
          console.log("onEnter   ");
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>
          <span className="block mx-auto mb-4 text-3xl font-bold text-center text-white font-gothamNarrow">
            Add the Preem Digital catalogue to your home screen
          </span>
        </Modal.Title>
        <Modal.Body>
          <div class="grid gap-2 md:grid-cols-3 px-[10%]">
            <div className="p-4 text-center bg-white rounded-xl">
              <span className="block">
                <div className="block mx-auto mb-4 text-center">
                  <span className="inline-block px-16 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow hover:text-preemGreen hover:bg-preemGreen">
                    Step 1
                  </span>
                </div>
              </span>
              <span className="block">
                <StaticImage
                  src="../images/download-icons/share-icon.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Share"
                  transformOptions={"cover"}
                  className="block w-16 mx-auto mb-4"
                />
              </span>
              <span className="block mt-4 text-lg font-bold leading-tight text-center text-preemGreen font-gothamNarrow">
                Select the ‘Share’ button in your browser toolbar
              </span>
            </div>
            <div className="p-4 text-center bg-white rounded-xl">
              <span className="block">
                <div className="block mx-auto mb-4 text-center">
                  <span className="inline-block px-16 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow hover:text-preemGreen hover:bg-preemGreen">
                    Step 2
                  </span>
                </div>
              </span>
              <span className="block mt-10">
                <StaticImage
                  src="../images/download-icons/add-icon.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Add"
                  transformOptions={"cover"}
                  className="block w-16 mx-auto mb-8"
                />
              </span>
              <span className="block mt-4 text-lg font-bold leading-tight text-center text-preemGreen font-gothamNarrow">
                In the dropdown panel, select ‘Add to Home Screen’
              </span>
            </div>
            <div className="p-4 text-center bg-white rounded-xl">
              <span className="block">
                <div className="block mx-auto mb-4 text-center">
                  <span className="inline-block px-16 py-2 text-sm font-medium align-top transition-colors rounded-full text-preemGreen hover:brightness-95 font-gothamNarrow bg-preemYellow hover:text-preemGreen hover:bg-preemGreen">
                    Step 3
                  </span>
                </div>
              </span>
              <span className="block mt-[2.3rem]">
                <StaticImage
                  src="../images/download-icons/preem-icon.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Preem"
                  transformOptions={"cover"}
                  className="block w-16 mx-auto mb-8"
                />
              </span>
              <span className="block mt-4 text-lg font-bold leading-tight text-center text-preemGreen font-gothamNarrow">
                The app has now been added to your device
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            onClick={handleClose}
            className="block mx-auto mb-4 text-center cursor-pointer"
          >
            <span className="inline-block px-16 py-2 text-lg font-medium align-top transition-colors rounded-full text-preemDarkGray hover:brightness-95 font-gothamNarrow bg-preemLightGray hover:text-preemLightGray hover:bg-preemDarkGray">
              Done
            </span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
