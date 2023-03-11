// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region 2. Project Libraries
import SideBar from '../../components/Sidebar/Sidebar';
import ReactButtonToggle from './ReactButtonToggle';
import ReactList from './ReactList';
import Application from './ReactPhonebook';
// endregion

// region U. UI Markups
import './Playground.scss';
// endregion

const Playground = () => {
    return (
        <div className="playground">
            <div className="header">
            <div className="page-title">
                <span className="font-h1">Coderbyte Challenge Demo</span>
            </div>
            </div>
            <SideBar />
            <div className="frame font-h3">
                <div className="container">
                    <div className="grid"><ReactButtonToggle /></div>
                    <div className="grid"><ReactList /></div>
                    <div className="grid"><Application /></div>
                </div> 
            </div>
            <div className="footer handwrite">
            <p>Julian Shih @Zehir</p>
            </div>
        </div>
    );
}

export default Playground;