

// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ onJsonDataChange }) => {
  const [jsonData, setJsonData] = useState({
    // ... Your existing jsonData ...
        COMPANYNAME: 'PDFTron',
        CUSTOMERNAME: 'Andrey Safonov',
        CompanyAddressLine1: '838 W Hastings St 5th floor',
        CompanyAddressLine2: 'Vancouver, BC V6C 0A6',
        CustomerAddressLine1: '123 Main Street',
        CustomerAddressLine2: 'Vancouver, BC V6A 2S5',
        Date: 'Nov 5th, 2021',
        ExpiryDate: 'Dec 5th, 2021',
        QuoteNumber: '134',
        WEBSITE: 'www.pdftron.com',
        billed_items: {
          insert_rows: [
            ['Apples', '3', '$5.00', '$15.00'],
            ['Oranges', '2', '$5.00', '$10.00'],
          ],
        },
        days: '30',
        total: '$25.00',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJsonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onJsonDataChange(jsonData);
  };

  return (
    <div className="sidebar">
      <h2>JSON Data Input</h2>
      <div>
        <label>COMPANYNAME:</label>
        <input type="text" name="COMPANYNAME" value={jsonData.COMPANYNAME} onChange={handleInputChange} />
      </div>
      {/* Add other input fields for the remaining JSON properties */}
      <button onClick={handleSubmit}>Apply JSON Data</button>
    </div>
  );
};

export default Sidebar;
