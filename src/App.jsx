import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "../src/HOC/Default.HOC";

import Temp from "./components/Temp";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;
