// region 1. Platform Libraries
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// endregion

// region 2. Project Libraries
import Homepage from './pages/Homepage/Homepage';
import Playground from './pages/Playground/Playground';
// endregion

// region U. UI Markups
import './index.scss';
// endregion

function Root() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);
