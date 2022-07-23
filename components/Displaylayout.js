import React, { Component, useState } from 'react';
import Displaychild from './Displaychild';


function Displaylayout() {

    const [selectedColorCode, setcolor] = useState({});

    const testArr = [{ id: 1, color: "#1d735d" }, { id: 2, color: "#1d735d" }, { id: 3, color: "#1d735d" }, { id: 4, color: "#1d735d" }, { id: 5, color: "#1d735d" }];
      
      
     const Onchangeclick = divId => () => {
        console.log(testArr[divId-1]);
        setcolor(testArr[divId-1])
      };

    return (
        <div className="main">
                <div className="menu1" >
                    {
                        testArr.map(
                            (value , indx)=><div  key={indx} className="menu"  onClick={Onchangeclick(value.id)}>{value.id}{value.color}</div>
                        )
                    }
                </div>
        
        <Displaychild changeover={selectedColorCode} ></Displaychild> 
        </div>
    );
}
export default Displaylayout;   