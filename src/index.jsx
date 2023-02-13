// region 1. Platform Libraries
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// endregion

// region 2. Project Libraries
import HomePage from './pages/HomePage/HomePage';
// endregion

// region U. UI Markups
import './index.scss';
// endregion

const index = ReactDOM.createRoot(document.getElementById('index'));

index.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>,
);
