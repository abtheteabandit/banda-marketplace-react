import React, { useState, useEffect } from 'react';
import './App.css';
import WhiteRadialMenu from '../WhiteRadialMenu'
import MerchRain from '../MerchRain'
import MerchMain from '../MerchMain'

function App() {

  const [merch, setMerch] = useState({
    arr:[]
  });  

  var lastLeft = 0;

  const updateLastLeft = (left) => {
    // lastLeft = left;
  };

  const removeThis = (id) => {
    setMerch((prevState) => ({
      arr: prevState.arr.splice(id,1)
    }));
  } 

  useEffect(() => {
      var counter = 0;
      var maxDrops = 8;
      const interval = setInterval(() => {
        if(counter < maxDrops){
          var newId = counter++;
          var leftVal = Math.random() * (window.innerWidth - 260);
          while(leftVal <= lastLeft+260 && leftVal >= lastLeft-260){
            leftVal = Math.random() * (window.innerWidth - 260);
          }
          lastLeft = leftVal;
          var style = {
            left: leftVal
          };
          var newObj = {
            url: "./assets/hoodie-test.png",
            id: newId,
            style: style
          };
          setMerch((prevState) => ({
            arr: [...prevState.arr, newObj]
          }));
        }
      },2400);
      return () => clearInterval(interval);
  }, []);



  return (
    <div className="App">
      <div className="site-body">
      </div>
      <WhiteRadialMenu></WhiteRadialMenu>
      <MerchRain merch={merch.arr} removeThis={removeThis} updateLastLeft={updateLastLeft}></MerchRain>
      <MerchMain></MerchMain>

    </div>
  );
}

export default App;
