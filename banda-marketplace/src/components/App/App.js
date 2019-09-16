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
  };

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  };

  useEffect(() => {
      var counter = 0;
      var maxDrops = 8;
      var imgArr = [
        "cool.png",
        "healthy.jpg",
        "very.jpg",
        "cool.png",
        "fine.jpg",
        "hydrate.jpg",
        "nature.jpg",
        "pant.jpg",
        "sad.jpg",
        "hydrate.jpg",
        "very.jpg",
        "hoodie-test.png",
        "cool.png",
        "healthy.jpg",
        "very.jpg",
        "cool.png",
        "fine.jpg",
        "hydrate.jpg",
        "nature.jpg",
        "pant.jpg",
        "sad.jpg",
        "hydrate.jpg",
        "very.jpg",
        "hoodie-test.png"
      ];
      var rollChance = Math.random()*10;
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log("CHANCE ROLLED: ");
      console.log(rollChance);

      if(rollChance > 9){
        imgArr.push("how.jpg");
      }
      imgArr = shuffle(imgArr);
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
            url: "./assets/"+imgArr[counter],
            id: newId,
            style: style
          };
          setMerch((prevState) => ({
            arr: [...prevState.arr, newObj]
          }));
        }
      },2400);
      // },400);
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
