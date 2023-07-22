import React, { useState, useEffect } from "react";
import CaseComponent from "./CaseComponent";
import "../styles/index.css"; // Assuming this is where your custom CSS is located
import "./searchStyles.css";

const Home = () => {
  const [caseData, setCaseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [pageNum, setPageNum] = useState(1); // State to store the page number
  const [loading, setLoading] = useState(false); // State to handle loading state

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state on input change
  };

  const handlePageNumChange = (event) => {
    setPageNum(parseInt(event.target.value, 10)); // Update the page number state on input change
  };

  const handleSearch = () => {
    setLoading(true);
  
    // Make a POST request to the app.py file server with the searchQuery and pageNum states
    fetch(`http://127.0.0.1:5000/search/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ formInput: searchQuery, pagenum: pageNum }).toString(),
    })
      .then((res) => {
        if (res.ok) {
          // The request was successful
          return res.json();
        } else {
          // The request failed
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        const cases = data.docs.map((doc) => ({
          title: doc.title,
          url: doc.url,
          headline: parseHeadline(doc.headline),
          publishdate: doc.publishdate,
          tid: doc.tid,
        }));
  
        setCaseData(cases);
        setLoading(false); // Set loading to false after data is received
  
        // Fetch details for each tid
        const fetchPromises = cases.map((doc) => {
          return fetch("http://127.0.0.1:5000/doc_details/", {
            method: "POST", // Change the method to "POST"
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ tid: doc.tid }).toString(),
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error(res.statusText);
              }
            })
            .then((docDetails) => {
              // Add the document details to the corresponding case
              return { ...doc, details: docDetails };
            });
        });
  
        // Resolve all fetch promises and update the cases state
        Promise.all(fetchPromises).then((casesWithDetails) => {
          setCaseData(casesWithDetails);
        });
  
        // Log the received data in the console
        console.log("Received data from app.py:", data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  const parseHeadline = (html) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, "text/html");
    return { __html: parsedHtml.body.innerHTML };
  };

  // Call handleSearch when the component mounts (optional)
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    // <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
    //   <div className="page-heading">
    //     <h1 className="title">Search</h1>
    //     <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <div className="container">
      <div className="page-heading">
      <div className="typewriter">
        <h1 className="title"> Law Search</h1>
        </div>
        <div className="search-form">
          <input
            id="searchInput"
            type="text"
            placeholder="Enter your search query"
            style={{ padding: "10px", marginRight: "10px", borderRadius: "5px" }}
            onChange={handleInputChange} // Call handleInputChange function on input change
          />
          <input
            id="pageNumInput"
            type="number"
            placeholder="Page Number"
            style={{ padding: "10px", marginRight: "10px", borderRadius: "5px" }}
            value={pageNum}
            onChange={handlePageNumChange} // Call handlePageNumChange function on input change
          />
          <button
            style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            onClick={handleSearch} // Call handleSearch function on button click
          >
            Search
          </button>
        </div>
      </div>

      {/* <div style={{ overflowY: "auto", flex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}> */}
      <div className="search-results">
        {loading ? (
          <div>Loading...</div>
        ) : (
          // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
          <div className="cases-container">
            {caseData.map((caseItem, index) => (
              <CaseComponent
                key={index}
                caseTitle={caseItem.title}
                caseUrl={caseItem.url}
                caseHeadline={caseItem.headline}
                casePublishDate={caseItem.publishdate}
                doc={caseItem.details && caseItem.details.doc} // Pass the 'doc' data to the CaseComponent
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;