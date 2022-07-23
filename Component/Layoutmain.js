import { useState, useRef, useEffect } from "react";



function Layoutmain() {
    const userN = useRef();
   // const [inputdata, setinputdata] = useState();
    const [Newarr, setNewArr] = useState([]);

    const onInputUpdate = (e) => {
        // console.log(userN.current.value);
        let tempArr = [...Newarr];
        let inputVal = userN.current.value;
        tempArr.push(inputVal);
        setNewArr(tempArr);
            
        userN.current.value="";

    }

const removeonclick=(indx)=>(e)=>{
    console.log(indx);
    //  let newvalue = e.target.indx;
    let tempArr = [...Newarr];
    tempArr.splice(indx, 1)
     setNewArr(tempArr);
   }



    return (

        <div className="main">
            <div className="main1">

                <div className="holder" >{
                    Newarr.map(
                        (value, indx) => <div key={indx} className="inputvalue" onClick={removeonclick(indx)}>{value}<span >&times;</span></div>
                    )
                }
                </div>
                <div className="menu">
                    <input type="text" name="name" ref={userN}></input>
                    <button onClick={onInputUpdate}>submit</button>
                </div>
            </div>
        </div>


    )
}
export default Layoutmain;