import React from "react";
import CaseComponent from "./CaseComponent";
import "../styles/index.css"; // Assuming this is where your custom CSS is located

const Home = () => {
  const caseTitles = [
    "Case 1",
    "Case 2",
    "Case 3",
    "Case 4",
    "Case 5",
    "Case 6",
    "Case 7",
    "Case 8",
    "Case 9",
    "Case 10",
  ];

  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   const pagenum = 1;

  //   // Make a POST request to the app.py file server
  //   const response = fetch(`http://127.0.0.1:5000/search/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       formInput: query,
  //       pagenum: pagenum,
  //     }),
  //   });

  //   // Handle the response
  //   response.then((res) => {
  //     if (res.ok) {
  //       // The request was successful
  //       res.json().then((data) => {
  //         // Update the caseTitles array with the results from the API
  //         caseTitles.splice(0, caseTitles.length);
  //         caseTitles.push(...data.cases);
  //       });
  //     } else {
  //       // The request failed
  //       console.log(res.statusText);
  //     }
  //   });
  // };





  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   const pagenum = 1;
  
  //   // Create a form object
  //   const formData = new FormData();
  
  //   // Add the form data
  //   formData.append("formInput", query);
  //   formData.append("pagenum", pagenum);
  
  //   // Make a POST request to the app.py file server
  //   const response = fetch(`http://127.0.0.1:5000/search/`, {
  //     method: "POST",
  //     body: formData,
  //   });
  
  //   // Handle the response
  //   response.then((res) => {
  //     if (res.ok) {
  //       // The request was successful
  //       res.json().then((data) => {
  //         // Update the caseTitles array with the results from the API
  //         caseTitles.splice(0, caseTitles.length);
  //         caseTitles.push(...data.cases);
  //       });
  //     } else {
  //       // The request failed
  //       console.log(res.statusText);
  //     }
  //   });
  // };



  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   const pagenum = 1;
  
  //   // Create a form object
  //   const formData = new FormData();
  
  //   // Add the form data
  //   formData.append("formInput", query);
  //   formData.append("pagenum", pagenum);
  
  //   // Make a POST request to the app.py file server
  //   const response = fetch(`http://127.0.0.1:5000/search/`, {
  //     method: "POST",
  //     body: formData,
  //   });
  
  //   // Handle the response
  //   response.then((res) => {
  //     if (res.ok) {
  //       // The request was successful
  //       res.json().then((data) => {
  //         // Update the caseTitles array with the results from the API
  //         const iterableCaseTitles = Array.from(data.cases);
  //         caseTitles.splice(0, caseTitles.length);
  //         caseTitles.push(...iterableCaseTitles);
  //       });
  //     } else {
  //       // The request failed
  //       console.log(res.statusText);
  //     }
  //   });
  // };



  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   const pagenum = 1;
  
  //   // Create a form object
  //   const formData = new FormData();
  
  //   // Add the form data
  //   formData.append("formInput", query);
  //   formData.append("pagenum", pagenum);
  
  //   // Make a POST request to the app.py file server
  //   const response = fetch(`http://127.0.0.1:5000/search/`, {
  //     method: "POST",
  //     body: formData,
  //   });
  
  //   // Handle the response
  //   response.then((res) => {
  //     if (res.ok) {
  //       // The request was successful
  //       res.json().then((data) => {
  //         // Update the caseTitles array with the results from the API
  //         if (data.cases !== null && data.cases !== undefined) {
  //           const iterableCaseTitles = Array.from(data.cases);
  //           caseTitles.splice(0, caseTitles.length);
  //           caseTitles.push(...iterableCaseTitles);
  //         }
  //       });
  //     } else {
  //       // The request failed
  //       console.log(res.statusText);
  //     }
  //   });
  // };



  const handleSearch = (event) => {
    const query = event.target.value;
    const pagenum = 1;
  
    // Create a form object
    const formData = new FormData();
  
    // Add the form data
    formData.append("formInput", query);
    formData.append("pagenum", pagenum);
  
    // Make a POST request to the app.py file server
    const response = fetch(`http://127.0.0.1:5000/search/`, {
      method: "POST",
      body: formData,
    });
  
    // Handle the response
    response.then((res) => {
      if (res.ok) {
        // The request was successful
        res.json().then((data) => {
          // Check if the data.cases object is defined
          if (data.cases) {
            // The object is defined, so convert it to an iterable object
            const iterableCaseTitles = Array.from(data.cases);
            caseTitles.splice(0, caseTitles.length);
            caseTitles.push(...iterableCaseTitles);
          }
        });
      } else {
        // The request failed
        console.log(res.statusText);
      }
    });
  };
  
  
  
  

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="page-heading">
        <h1 className="title">Search</h1>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter your search query"
            style={{ padding: "10px", marginRight: "10px", borderRadius: "5px" }}
            onChange={handleSearch}
          />
          <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
            Search
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
        {caseTitles.map((caseTitle, index) => (
          <CaseComponent key={index} caseTitle={caseTitle} />
        ))}
      </div>
    </div>
  );
};

export default Home;







//working
// import React from "react";
// import CaseComponent from "./CaseComponent";
// import "../styles/index.css"; // Assuming this is where your custom CSS is located

// const Home = () => {
//   const caseTitles = [
//     "Case 1",
//     "Case 2",
//     "Case 3",
//     "Case 4",
//     "Case 5",
//     "Case 6",
//     "Case 7",
//     "Case 8",
//     "Case 9",
//     "Case 10",
//   ];

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div className="page-heading">
//         <h1 className="title">Search</h1>
//         <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
//           <input
//             type="text"
//             placeholder="Enter your search query"
//             style={{ padding: "10px", marginRight: "10px", borderRadius: "5px" }}
//           />
//           <button style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
//             Search
//           </button>
//         </div>
//       </div>

//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
//         {caseTitles.map((caseTitle, index) => (
//           <CaseComponent key={index} caseTitle={caseTitle} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
