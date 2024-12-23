import "./App.css";
import Navbar from "./Components/Navbar";
import LoadScreen from "./Components/LoadScreen";
import { useState } from "react";
import ImageViewer from "./Components/ImageViewer";
import {GridContainer} from "./Components/GridContainer";
import { Grid } from "@nextui-org/react";


function App() {
  let [load, setLoad] = useState(false);
  setTimeout(()=>{setLoad(false)},3000)
  return (
    <>
      {load ? (
        <LoadScreen />
      ) : (
        <>
          <Navbar />
          <ImageViewer />
          <GridContainer />
        </>
      )}
    </>
  );
}

export default App;
