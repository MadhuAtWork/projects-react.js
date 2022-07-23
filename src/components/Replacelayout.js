
import React, { Component, useState} from 'react';

 import Childlayout from './Childlayout';

function Replacelayout(){

    const [selectedColorCode,setcolor]=useState();
    const cpolorCodes = ["#1d735d","#1d735a","#1d735b","#1d735c","#1d735e","#561d73"]

    // const testArr = [{id:1, color : "#1d735d" } ,{id:2, color : "#1d735d" },{id:3, color : "#1d735d" },{id:4, color : "#1d735d" },{id:5, color : "#1d735d" }]

    const onclickchange=(e)=>{
        let k = e.target.id.split("_");
        let currentIndex = k[1];
        setcolor(cpolorCodes[currentIndex-1]);
        // setcolor()
 

    }
return(
    <div className="main">
<div className="menu">
  <div className="menu1" id={"btn_1"} onClick={onclickchange}></div>
  {/* <div className="menu2" id={"btn_2"} onClick={onclickchange}></div>
  <div className="menu3" id={"btn_3"} onClick={onclickchange}></div>
  <div className="menu4" id={"btn_4"} onClick={onclickchange}></div>
  <div className="menu5" id={"btn_5"} onClick={onclickchange}></div>
  <div className="menu6" id={"btn_6"} onClick={onclickchange}></div> */}
  </div>
  <Childlayout changecolor={selectedColorCode}></Childlayout>  

    </div>
)
}
export default Replacelayout;
