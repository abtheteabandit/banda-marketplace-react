import React from 'react';
import './RadialMenu.css';

function RadialMenu() {

    const openSupportModal = () => {
        document.getElementById('modal-wrapper-support').style.display='block';
    }

  return (
    <div className="radial-menu-outer">
        <div id="container">
            <img id="menuBacking" src={require("./assets/menu.png")}></img>
            <div id="corner"><a href="#"><i id="mainbtn"><img src={require("./assets/banda_b.png")}></img></i></a></div>
        </div>
        <div className='circle-container'>
            <a href='control-center' className='deg0' id="home_button"><p className="radialText">Home</p></a>
            <a href='about' className='deg30'><p className="radialText">About</p></a>
            <a href='index' className='deg60'><p className="radialText">Landing</p></a>
            <a href='#' className='deg90' onClick={openSupportModal}><p className="radialText">Support</p></a>
        </div>
    </div>
  );
}

export default RadialMenu;
