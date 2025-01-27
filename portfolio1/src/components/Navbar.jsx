import React from "react";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  // side effect of chaning theme
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <>
      <div class="flex justify-between items-center">
        <img
          class="w-14 h-14 object-cover rounded-full ml-10 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4rZeNMC2qZp0Y278IlncSnyDYEcdt7squA&s"
        ></img>
        <div class="flex justify-center 2xl:gap-10 xl:gap-7 lg:gap-4 md:gap-3">
          <ul>About</ul>
          <ul>Experience</ul>
          <ul>Skills</ul>
          <ul>Project</ul>
          <ul>Contact</ul>
        </div>
        <ul>
          <DarkModeToggle onSwitch={toggleTheme} theme={theme} />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
