import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './Upload';
import ImageViewer from './ImageViewer';
import styled from 'styled-components';
import AppFooter from './Footer';

const Footer = styled.footer`
  padding: 10px 20px;
  background-color: #333; /* You can change this to fit your color scheme */
  color: white;
  text-align: center;
  font-size: 0.8em;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;


const Gallery = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>

  );
};

export default Gallery;
