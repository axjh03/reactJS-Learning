import "./App.css";
import Navbar from "./Components/Navbar";
import LoadScreen from "./Components/LoadScreen";
import { useState } from "react";
import ImageViewer from "./Components/EmblaCarousel/js/ImageSider";
import LandText from "./Components/LandText";
import MenuItems from "./Components/MenuItems";
import MENU from "./assets/data";
import { Box } from "@mui/system";
import { ClassNames } from "@emotion/react";

function App() {
  let [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 3000);
  return (
    <>
      {load ? (
        <LoadScreen />
      ) : (
        <>
          <Navbar />
          <LandText />
          <ImageViewer />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gridTemplateColumns: "repeat(2, 1fr)", // Two items per row
              alignContent: "space-around",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              // maxWidth: 380,
              // height: 200,
              borderRadius: 1,
            }}
          >
            {Object.keys(MENU).map((key) => (
              
              <MenuItems
                key={key}
                name={MENU[key].name}
                image={MENU[key].image}
                description={MENU[key].description}
                price={MENU[key].price}
              />
            ))}
          </Box>
        </>
      )}
    </>
  );
}

export default App;
