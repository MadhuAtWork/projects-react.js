import { useState , useRef } from "react";

function Formvalidation() {
    const userN = useRef(null);
    const passN = useRef(null);
    const [data, setdata] = useState({ username: "", password: "" })


    const changehandler = (event) => {
    }

    const submithandler = (event) =>{
    
        // event.preventdefault();
        if (userN.current.value == "" || passN.current.value == "") {
            alert("enter user name")
        } else{
            alert(userN.current.value , "______________"  ,passN.current.value)
        }
    }
    return (
   
            <div className="main">
                <div className="menu">
                    <input ref={userN} type="text" name="username"  placeholder="user name" onChange={changehandler}></input>
                </div>
                <div className="menu">
                    <input ref={passN} type="password" name="password"  placeholder="password" onChange={changehandler}></input>
                </div>
                <div className="menu">
                <div onClick={submithandler}>{"SUBMIT"}</div>

                </div>
            </div>
  
    )
}
export default Formvalidation
