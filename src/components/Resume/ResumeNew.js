import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Bhautik-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ===== TOP DOWNLOAD BUTTON ===== */}
        <Row className="justify-content-center mb-4">
          <Button
            className="Resume-btn1"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "175px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* ===== PDF CENTER (PAGE 1, PAGE 2 BELOW) ===== */}
        <Row
          className="resume"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Document
              file={pdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={index}
                    pageNumber={index + 1}
                    scale={width > 786 ? 1.7 : 0.6}
                    style={{ marginBottom: "30px" }}
                  />
                ))}
            </Document>
          </div>
        </Row>

        {/* ===== BOTTOM DOWNLOAD BUTTON (SAME AS TOP) ===== */}
        <Row className="justify-content-center">
          <Button
            className="Resume-btn1"
            variant="primary"
            href={pdf}
            target="_blank"
           style={{ maxWidth: "175px", marginBottom: "49px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
