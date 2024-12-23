import "./App.css";
import Navbar from "./Components/Navbar";
import LoadScreen from "./Components/LoadScreen";
import { useState } from "react";
import ImageViewer from "./Components/EmblaCarousel/js/ImageSider"
import LandText from "./Components/LandText";
function App() {

  
  let [load, setLoad] = useState(true);
  setTimeout(()=>{setLoad(false)},3000)
  return (
    <>
      {load ? (
        <LoadScreen />
      ) : (
        <>
          <Navbar />
          <LandText />
          <ImageViewer/>
        </>
      )}
    </>
  );
}

export default App;
