
import React, { Component} from 'react';

function Childlayout(props){

    return(
        <div className="holder">
            <div style={{width:'500px',height:'500px'}}>{props.changecolor}</div></div>
    )
}
export default Childlayout;
// background:props.changecolor