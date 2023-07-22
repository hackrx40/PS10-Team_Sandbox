import React, { useState } from 'react';
import Navbar from "./Navbar";

const Sidebar = ({ onJsonDataChange, companyName }) => {
  const [jsonData, setJsonData] = useState({
    // ... Your existing jsonData ...
    // COMPANYNAME: companyName || 'PDFTron', // Use the provided companyName or default to 'PDFTron',
    // ... Other properties ...
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJsonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    onJsonDataChange(jsonData);
  };

  const generateDefences = () => {
    // Add the logic here to generate the defences based on the current jsonData and selectedFile
    if (selectedFile) {
      // Process the selected file and create defenses
      console.log('Defences generated for:', jsonData);
      console.log('Selected File:', selectedFile);
    } else {
      console.log('Please select a document first.');
    }
  };

  return (
    <div className="sidebar">
      <h2>JSON Data Input</h2>
      <div>
        <label>location:</label>
        <input
          type="text"
          name="location"
          value={jsonData.location}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Applicants:</label>
        <input
          type="text"
          name="Applicants"
          value={jsonData.Applicants}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>oppNo:</label>
        <input
          type="text"
          name="oppNo"
          value={jsonData.oppNo}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>opponentAddress:</label>
        <input
          type="text"
          name="opponentAddress"
          value={jsonData.opponentAddress}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>otherOpp:</label>
        <input
          type="text"
          name="otherOpp"
          value={jsonData.otherOpp}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>vehicleNo:</label>
        <input
          type="text"
          name="vehicleNo"
          value={jsonData.vehicleNo}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>insurancePolicyNo:</label>
        <input
          type="text"
          name="insurancePolicyNo"
          value={jsonData.insurancePolicyNo}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>insuranceStart:</label>
        <input
          type="text"
          name="insuranceStart"
          value={jsonData.insuranceStart}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>insuranceEnd:</label>
        <input
          type="text"
          name="insuranceEnd"
          value={jsonData.insuranceEnd}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Defenses:</label>
        <input
          type="text"
          name="Defenses"
          value={jsonData.Defenses}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>District:</label>
        <input
          type="text"
          name="District"
          value={jsonData.District}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>ntrestRate:</label>
        <input
          type="text"
          name="ntrestRate"
          value={jsonData.ntrestRate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>proposedIntrestRate:</label>
        <input
          type="text"
          name="proposedIntrestRate"
          value={jsonData.proposedIntrestRate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>date:</label>
        <input
          type="text"
          name="date"
          value={jsonData.date}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>advocateForBajaj:</label>
        <input
          type="text"
          name="advocateForBajaj"
          value={jsonData.advocateForBajaj}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>verifierName:</label>
        <input
          type="text"
          name="verifierName"
          value={jsonData.verifierName}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleSubmit}>Apply JSON Data</button>

      {/* File input for uploading a document */}
      <div>
        <label>Upload Document:</label>
        <input type="file" onChange={handleFileInputChange} />
      </div>

      <button onClick={generateDefences}>Generate Defences</button>
    </div>
  );
};

export default Sidebar;
