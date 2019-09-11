import React from 'react';
import './MerchRainDrop.css';

function MerchRainDrop(props) {

    return (
        <div id="merch-rain-drop-container">
            <img src={require("./assets/merch-drop-top.png")} className="merch-drop-top"></img>
            <img src={props.img} className="merch-drop-main"></img>
            <img src={require("./assets/merch-drop-bot.png")} className="merch-drop-bot"></img>
        </div>
    );
}

export default MerchRainDrop;
