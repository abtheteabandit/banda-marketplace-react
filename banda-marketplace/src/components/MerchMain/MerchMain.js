import React, { useState, useEffect } from 'react';
import './MerchMain.css';

function MerchMain(props) {

    return (
        <div id="main-container">
            <div id="sub-container">
                <div id="low-container">
                    <h1 id="product-type">product type</h1>
                    <div id="nav-grid">
                        <div className="nav-grid-item">
                            <button>apparel</button>
                        </div>
                        <div className="nav-grid-item">
                            <button>music</button>
                        </div>
                        <div className="nav-grid-item">
                            <button>tickets</button>
                        </div>
                        <div className="nav-grid-item">
                            <button>more to come...</button>
                        </div>
                    </div>
                    <img id="blue-bars" src={require("./assets/blue-bars.png")} alt="blue"></img>
                    <div id="search-container">
                        <input id="search-input"></input>
                        <img src={require("./assets/magnify.png")} alt="search" id="magnify"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchMain;

