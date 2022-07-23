import { useState } from "react";

function Sidenavbarhide() {
    const [navbar, setnavbar] = useState(false);

    const onhandlechange = () => {
        setnavbar(!navbar);
    }
    
    return (
        <div class="main">
            <div className="menu" onClick={onhandlechange}><span>&#9776; open</span></div>
            <div className={navbar ? "sidenav" : "unset_sidenav"} >
                <div className="holder" onClick={onhandlechange}>&times;</div>
                <div className="holder">Home</div>
                <div className="holder"> contact</div>
                <div className="holder"> About</div>
                <div className="holder">service</div>
            </div>


        </div>
    )
}
export default Sidenavbarhide; 