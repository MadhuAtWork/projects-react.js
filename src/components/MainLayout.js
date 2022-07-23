// MyOtherComponent.js
import React, { Component, useState } from 'react';
 import MyChildComponent from './MyChildComponent';

// class MainLayout extends Component {
  // constructor(){
  //   super()
  //   this.state={count:0} 
  // }

  // render() {

  function MainLayout(){
 
    const [countVal , set]=useState(0);

    const Onchangeclick=()=>{
      set(countVal+1)
    }

    return (
      <div>
        <div className="main">
          <button onClick={Onchangeclick} >click</button>
        </div>
        {/* <h1>count:{countVal}</h1> */}
        <MyChildComponent count={countVal}></MyChildComponent>
      </div>
    );
  }
// }

export default MainLayout;

