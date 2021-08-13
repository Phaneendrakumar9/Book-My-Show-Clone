import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "../src/HOC/Default.HOC";
import Temp from "./components/Temp";

//Components

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;
