import './App.css';
import Replacelayout from './components/Replacelayout';
import Displaylayout from './components/Displaylayout';
import Colorbutton from './components/Colorbutton';
import Layoutmain from './Component/Layoutmain';
import Displayheader from './components/Displayheader';
import { Button } from 'react-bootstrap';
import Buttoncolorchange from './components/Buttoncolorchange';
import Sidenavbarhide from './components/Sidenavbarhide'

function App() {

  return (
    <div className="container">
      {/* <Replacelayout /> */}
      {/* <Displaylayout/> */}
     {/* <Colorbutton></Colorbutton> */}
      {/*  <Layoutmain></Layoutmain>  */ }
      {/* <Displayheader></Displayheader> */}
      {/* <Buttoncolorchange></Buttoncolorchange> */}
      <Sidenavbarhide></Sidenavbarhide>
    </div>
  )
}

export default App;
