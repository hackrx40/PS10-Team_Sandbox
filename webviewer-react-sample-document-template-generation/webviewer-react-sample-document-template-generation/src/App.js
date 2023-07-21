// App.js
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import WebViewer from '@pdftron/webviewer';
import './App.css';
import Sidebar from './sidebar';
import Search from './pages/search';
import Notes from './pages/notes';
import Doc from './pages/doc_gen';

const App = () => {
  const viewer = useRef(null);
  const [jsonData, setJsonData] = useState(null);
  const [viewerKey, setViewerKey] = useState(Date.now()); // Generate a unique key for the viewer div

  useEffect(() => {
    // ... Your existing useEffect code for the WebViewer ...
    if (jsonData && viewer.current) {
      // Dispose the previous instance before creating a new one
      if (viewer.current.hasChildNodes()) {
        viewer.current.removeChild(viewer.current.firstChild);
      }

      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/files/quote.docx',
        },
        viewer.current
      ).then(async (instance) => {
        const { documentViewer } = instance.Core;

        documentViewer.addEventListener('documentLoaded', async () => {
          await documentViewer.getDocument().documentCompletePromise();
          documentViewer.updateView();

          await documentViewer.getDocument().applyTemplateValues(jsonData);
        });
      });
    }
  }, [jsonData]);

  const handleJsonDataChange = (data) => {
    setJsonData(data);
    setViewerKey(Date.now()); // Generate a new key to force rendering a new WebViewer instance
  };

  function DocumentGenerator() {
    return (
      <div>
        {/* Common Header */}
       

        {/* Common Sidebar */}
        <Sidebar onJsonDataChange={handleJsonDataChange} />

        {/* Common Main Container */}
        <div className="main-container">
          <Routes>
            {/* Route for the WebViewer */}
            <Route path="/" element={<div key={viewerKey} className="webviewer" ref={viewer} />} />

            {/* Route for the Search component */}
            <Route path="/search" element={<Search />} />

            {/* Route for the Notes component */}
            <Route path="/notes" element={<Notes />} />

            {/* Route for the Doc Generator component */}
            <Route path="/doc_generator" element={<Doc />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* /document-generator Route */}
          <Route path="/document-generator" element={<DocumentGenerator />} />

          {/* Route for the Search component */}
          <Route path="/search" element={<Search />} />

          {/* Route for the Notes component */}
          <Route path="/notes" element={<Notes />} />

          {/* Route for the Doc Generator component */}
          <Route path="/document-generator" element={<Doc />} />
        </Routes>
      </Router>
    </div>
  );
};

function Home() {
  return (
    <div>
      {/* Common Header */}
      {/* <div className="header">React sample</div> */}

      {/* Buttons for Search, Notes, and Doc Generator */}
      <div className="buttons-container">
        <Link to="/search" className="button">Search</Link>
        <Link to="/notes" className="button">Notes</Link>
        <Link to="/document-generator" className="button">Doc Generator</Link>
      </div>
    </div>
  );
}

export default App;
