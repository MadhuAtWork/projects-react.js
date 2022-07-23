import React, { Component} from 'react';
function Displaychild(props){

    return(
        <div className="holder">
     
     <div className="holder1"> {props.changeover.id} {"-------------"} {props.changeover.color}</div>
     </div>
    )
}
export default Displaychild;