import React from 'react';

const Chatbot = () => {
  return (
    <div>
      <h1>Notes</h1>
      <iframe
        title="Streamlit App"
        src="http://localhost:1230/" // Replace with the URL of your Streamlit app
        width="100%"
        height="800px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Chatbot;