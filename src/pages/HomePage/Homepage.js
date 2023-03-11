// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region 2. Project Libraries
import SideBar from '../../components/Sidebar/Sidebar';
import About from './About';
import Experience from './Experience';
// endregion

// region U. UI Markups
import './Homepage.scss';
// endregion

function Homepage() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="page-title">
          <span className="font-h1">Julian Yun-An SHIH</span>
          <span className="font-h4">established 1996</span>
        </div>
      </div>
      <SideBar />
      <div className="frame">
        <About />
        <Experience />
      </div>
      <div className="footer handwrite">
        <p>Julian Shih @Zehir</p>
      </div>
    </div>
  );
}

export default Homepage;