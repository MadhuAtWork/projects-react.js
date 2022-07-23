
 import { useState } from 'react';
import Contact from './Contact';
 import Home from './Home';
 import About from './About';
 import Help from './Help';
const Displayheader =()=>{

    const[mode , setDisplayMode] = useState("home");
const onHandleDisplay =(displayMode)=>(e)=>{
    setDisplayMode(displayMode);

}
    return(

        <div className='main'>
            
           <div className="menu">
                <div className="home" id={"btn_1"} onClick={onHandleDisplay("home")}>HOME</div>
                <div className="contact" id={"btn_2"} onClick={onHandleDisplay("contact")}>CONTACT</div>
                <div className="about" id={"btn_3"} onClick={onHandleDisplay("about")} >ABOUT</div>
                <div className="help" id={"btn_4"} onClick={onHandleDisplay("help")}>HELP</div> 
          </div>
            <div className="holder">

                {mode == "home" ? <Home></Home>: ""}
                {mode == "contact" ? <Contact></Contact> : ""}
                {mode == "about" ? <About></About> : ""}
                {mode == "help" ? <Help></Help> : ""}
   
            </div>
        </div>
    )
}
export default Displayheader;


