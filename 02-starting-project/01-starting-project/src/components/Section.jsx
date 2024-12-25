import React from "react";

function Section({title, children, ...leftOverProps}) {
  return (
    <section {...leftOverProps}>
      <h2>{title}</h2>
      {children}
      
    </section>
  );
}

export default Section;
