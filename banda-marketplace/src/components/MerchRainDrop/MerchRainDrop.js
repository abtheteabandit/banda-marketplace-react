import React, { useState, useEffect } from 'react';
import './MerchRainDrop.css';

function MerchRainDrop(props) {

    useEffect(() => {
        const interval = setInterval(() => {
            props.updateLastLeft(props.style.left);
            console.log('updating last left as: '+props.style.left);
        },10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={props.classArr[0]} style={props.style}>
            <img src={require("./assets/merch-drop-top.png")} className={props.classArr[1]} alt="top"></img>
            <img src={require("" + props.img)} className={props.classArr[2]} alt="merch"></img>
            <img src={require("./assets/merch-drop-bot.png")} className={props.classArr[3]} alt="bot"></img>
        </div>
    );
}

export default MerchRainDrop;
