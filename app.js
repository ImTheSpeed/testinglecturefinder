import React, { useState } from 'react';
import './App.css';  // Ensure to include this for styling

const App = () => {
  const [displayContent, setDisplayContent] = useState(null);

  return (
    <div className="container">
      {/* Header Area (Red marked area) */}
      <header className="custom-header">
        <h1>Your Custom Header</h1>
      </header>

      <div className="main-content">
        {/* Sidebar Area (Blue marked area) */}
        <div className="sidebar">
          <div className="sidebar-item red" onClick={() => setDisplayContent('content1')}>(05)</div>
          <div className="sidebar-item blue" onClick={() => setDisplayContent('content2')}>(08)</div>
          <div className="sidebar-item green" onClick={() => setDisplayContent('content3')}>(10)</div>
          <div className="sidebar-item purple" onClick={() => setDisplayContent('content4')}>(12)</div>
          <div className="sidebar-item orange" onClick={() => setDisplayContent('content5')}>(15)</div>
        </div>

        {/* Content Display Area (Green marked area) */}
        <div className="content-display">
          {displayContent === 'content1' && <img src="path_to_image1.jpg" alt="Content 1" />}
          {displayContent === 'content2' && <img src="path_to_image2.jpg" alt="Content 2" />}
          {displayContent === 'content3' && <iframe src="path_to_pdf1.pdf" title="Content 3" />}
          {displayContent === 'content4' && <img src="path_to_image3.jpg" alt="Content 4" />}
          {displayContent === 'content5' && <iframe src="path_to_pdf2.pdf" title="Content 5" />}
        </div>
      </div>
    </div>
  );
};

export default App;
