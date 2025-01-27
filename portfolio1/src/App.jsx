import React, { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Navbar />
    </div>
  );
};

export default App;
