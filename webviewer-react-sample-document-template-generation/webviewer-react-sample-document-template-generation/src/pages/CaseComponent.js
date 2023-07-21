// CaseComponent.js


//with pagenumber
// import React from "react";

// const CaseComponent = ({ caseTitle }) => {
//   const analyzeUrl = "http://127.0.0.1:5000"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;






// with url
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl }) => {
//   const analyzeUrl = "http://127.0.0.1:5000"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;






// working date and headline
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate }) => {
//   const analyzeUrl = "http://127.0.0.1:5000"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <p>{caseHeadline}</p>
//         <p>{casePublishDate}</p>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;






//working with headline date and bold
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate }) => {
//   const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <p dangerouslySetInnerHTML={caseHeadline} /> {/* Render the headline with bold tags */}
//         <p>{casePublishDate}</p>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;







//experimental
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate, caseTid, handleAnalyze }) => {
//   const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <p dangerouslySetInnerHTML={caseHeadline} />
//         <p>{casePublishDate}</p>
//         <button onClick={() => handleAnalyze(caseTid)}>Analyze</button> {/* Add onClick event */}
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;








//new experiment
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate }) => {
//   const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <p dangerouslySetInnerHTML={caseHeadline} /> {/* Render the headline with bold tags */}
//         <p>{casePublishDate}</p>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;








// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate, doc }) => {
//   const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3 style={{ flex: 1, marginRight: "10px" }}>{caseTitle}</h3>
//       </a>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <p dangerouslySetInnerHTML={caseHeadline} /> {/* Render the headline with bold tags */}
//         <p>{casePublishDate}</p>
//         <a href={analyzeUrl} rel="noopener noreferrer" style={{ marginBottom: "10px" }}>
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "5px 10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//       {/* Display the 'doc' property data */}
//       {/* {doc && <div dangerouslySetInnerHTML={{ __html: doc }} />} */}
//       {doc && (
//         <div style={{ overflowY: "auto", maxHeight: "200px", marginLeft: "20px", border: "1px solid #ccc", padding: "10px" }}>
//           <div dangerouslySetInnerHTML={{ __html: doc }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CaseComponent;




//current working
// import React from "react";

// const CaseComponent = ({ caseTitle, caseUrl, caseHeadline, casePublishDate, doc }) => {
//   const analyzeUrl = "http://127.0.0.1:5002"; // Replace with your Flask application's URL
//   const summarizeUrl = "http://localhost:5001"; // URL for the summarize endpoint

//   return (
//     <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px", border: "1px solid #ccc", padding: "20px" }}>
//       <a href={caseUrl} target="_blank" rel="noopener noreferrer">
//         <h3>{caseTitle}</h3>
//       </a>
//       <p dangerouslySetInnerHTML={caseHeadline} />
//       <p>{casePublishDate}</p>

//       {doc && (
//         <div style={{ overflowY: "auto", maxHeight: "200px", marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
//           <div dangerouslySetInnerHTML={{ __html: doc }} />
//         </div>
//       )}

//       <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
//         <a href={analyzeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//             Analyze
//           </button>
//         </a>
//         <a href={summarizeUrl} rel="noopener noreferrer">
//           <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//             Summarize
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CaseComponent;








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