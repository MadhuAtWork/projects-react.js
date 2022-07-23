import { useState ,useEffect} from "react";
import Ondiv from './Ondiv';
import Offdiv from './Offdiv';


function Buttoncolorchange(){

    const [changecolor,setchangecolor]=useState();
    // const onhandlechange =()=>{
    //    // setchangecolor(!changecolor);
    // }
    const onhandlechange = () => {
        setInterval(() => {
            setchangecolor(!changecolor);
        }, 500);
      }
    return(
        <div className="main">
            <div className="menu" onClick={onhandlechange}>click here</div>
            <div className="holder">
                {
                 changecolor? <Ondiv></Ondiv> : <Offdiv></Offdiv>
                }
            </div>
        </div>
    )
}
export default Buttoncolorchange;
