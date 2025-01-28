import React,{useRef} from 'react'
import generatePDF, { Resolution } from 'react-to-pdf';

const Example = () => {
    const targetRef = useRef(null);
    const options = {
      method: "save",
      resolution: Resolution.HIGH,
      page: {
        orientation: "portrait",
        margin: { top: 10, bottom: 10, left: 15, right: 15 },
        size: "A4",
      },
      overrides: {
        pdf: {
          compress: true,
        },
      },
      html2canvasOptions: {
        scale: 2,
        useCORS: true,
        backgroundColor: null,

      },
      filename: "new-document.pdf",
      watermark: {
        text: "CONFIDENTIAL",
        opacity: 0.9,
        position: "center",
      },
    };
    
    return (
      <>
        <div ref={targetRef}>
          <h1 className="text-center">This is New Pdf</h1>
          <p className="text-center">Hi! Good Afternoon. It's going to be good data.</p>
        </div>
        <button onClick={() => generatePDF(targetRef, options)}>
          Download
        </button>
      </>
    );
    
}

export default Example