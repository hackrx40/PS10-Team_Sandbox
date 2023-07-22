import React from "react";
import "./caseComponentStyles.css";

const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate, doc }) => {
  const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
  const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

  return (
    // <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px", border: "1px solid #ccc", padding: "20px" }}>
    <div className="case-container">
      <a href={caseUrl} target="_blank" rel="noopener noreferrer">
        <h3>{caseTitle}</h3>
      </a>
      <p dangerouslySetInnerHTML={caseHeadline} />
      <p>{casePublishDate}</p>

      {doc && (
        // <div style={{ overflowY: "auto", maxHeight: "200px", marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <div className="doc-details">
          <div dangerouslySetInnerHTML={{ __html: doc }} />
        </div>
      )}

      {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}> */}
      <div className="buttons-container">
        <a href={analyzeUrl} rel="noopener noreferrer">
          <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Analyze
          </button>
        </a>
        <a href={summarizeUrl} rel="noopener noreferrer">
          <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Summarize
          </button>
        </a>
      </div>
    </div>
  );
};

export default CaseComponent;