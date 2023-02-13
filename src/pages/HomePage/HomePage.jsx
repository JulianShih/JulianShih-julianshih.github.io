// region 1. Platform Libraries
import React, { Component } from 'react';
// endregion

// region 2. Project Libraries
import SideBar from '../../components/SideBar/SideBar';
import About from './About';
import Experience from './Experience';
// endregion

// region U. UI Markups
import './HomePage.scss';
// endregion

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
}
