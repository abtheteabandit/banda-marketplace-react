import React, { useState, useEffect } from 'react';
import './MerchRain.css';
import MerchRainDrop from '../MerchRainDrop'

function MerchRain(props) {

    var stepper = 0;



    const toggleSizeClasses = () => {
        console.log(stepper);
        switch(stepper){
            case 0:
                stepper++;
                var obj = [
                    'merch-rain-drop-container-lg',
                    'merch-drop-top-lg',
                    'merch-drop-main-lg',
                    'merch-drop-bot-lg'
                ];
                return(obj);
            case 1:
                stepper++;
                var obj = [
                    'merch-rain-drop-container-md',
                    'merch-drop-top-md',
                    'merch-drop-main-md',
                    'merch-drop-bot-md'
                ];
                return(obj);
            case 2:
                stepper = 0;
                var obj = [
                    'merch-rain-drop-container-sm',
                    'merch-drop-top-sm',
                    'merch-drop-main-sm',
                    'merch-drop-bot-sm'
                ];
                return(obj);
            default:
                break;
        }
    }

    return (
        <div id="merch-rain-container">
            {
                props.merch.map((item) => (
                    <MerchRainDrop key={item.id} img={item.url} style={item.style} classArr={toggleSizeClasses()} updateLastLeft={props.updateLastLeft}></MerchRainDrop> 
                ))
            }
        </div>
    );
}

export default MerchRain;

