import React, { Component, useState , useEffect} from 'react';



function Colorbutton(){

    const [selectedColorCode,setcolor]=useState();
    const [newArr,setNewArr]=useState([]);
    const [undoArr,setundoArr]=useState([]);
    const [rendoArr,setrendoArr]=useState([]);
  
 const colorCodes = ["brown","rgb(165, 42, 144)","rgb(56, 165, 42)","rgb(54, 42, 165)","rgb(165, 42, 118)","rgb(128, 165, 42","rgb(42, 147, 165)","rgb(252, 248, 35)","rgb(165, 61, 42)","rgb(165, 61, 42)","rgb(23, 232, 240)","brown","brown"," rgb(157, 165, 42)","rgb(99, 42, 165)","rgb(165, 42, 165)"]

const onclickchange=(e)=>{
    let k = e.target.id.split("_");
    let currentcolor=k[1];
    let colorCode = colorCodes[currentcolor - 1];
    setcolor(colorCode);
    let tempArr = [...newArr];
    tempArr.push(colorCode);
    setNewArr(tempArr);
    console.log(tempArr);
}

const undoChanges=()=>{
 const x = newArr.pop();
 setcolor(x)
 let undovalue =[...undoArr];
 undovalue.push(x);
 setundoArr(undovalue);
 console.log(undovalue)
}

const redoChanges=()=>{   
 const y = undoArr.pop();
 console.log(y);
 setcolor(y);
 let rendovalue =[...rendoArr];
 rendovalue.push(y);
 setrendoArr(rendovalue);
 console.log(rendovalue);
}

    return(
<div className="main" style={{backgroundColor:selectedColorCode}}>  
<div className="menu" >
    <div className="holder1" id={"btn_1"} onClick={onclickchange}></div>
    <div className="holder2" id={"btn_2"} onClick={onclickchange}></div>
    <div className="holder3" id={"btn_3"} onClick={onclickchange}></div>
    <div className="holder4" id={"btn_4"} onClick={onclickchange}></div>
    <div className="holder5" id={"btn_5"} onClick={onclickchange}></div>
    <div className="holder6" id={"btn_6"} onClick={onclickchange}></div>
    <div className="holder7" id={"btn_7"} onClick={onclickchange}></div>
    <div className="holder8" id={"btn_8"} onClick={onclickchange}></div>
    <div className="holder9" id={"btn_9"} onClick={onclickchange}></div>
    <div className="holder10" id={"btn_10"} onClick={onclickchange}></div>
    <div className="holder11" id={"btn_11"} onClick={onclickchange}></div>
    <div className="holder12" id={"btn_12"} onClick={onclickchange}></div>
    <div className="holder13" id={"btn_13"} onClick={onclickchange}></div>
    <div className="holder14" id={"btn_14"} onClick={onclickchange}></div>
    <div className="holder15" id={"btn_15"} onClick={onclickchange}></div>
    <div className="holder16" id={"btn_16"} onClick={onclickchange}></div>
    <div className="holder17"  onClick={onclickchange}>Cancel</div>
    <div className="holder17"  onClick={undoChanges}>undo</div>
    <div className="holder17"  onClick={redoChanges}>redo</div>

</div>
</div>

    )
}
export default Colorbutton;