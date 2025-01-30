import React from "react";

function About() {
  return (
    <div class="h-screen">
      <div>
        <h1 class="">About Me</h1>
        <button
          href="https://rupaut98.github.io/#contact"
          onClick={() => {
            window.open("https://rupaut98.github.io/#contact", "_blank");
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default About;
