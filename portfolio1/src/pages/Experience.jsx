import React from "react";
import ExperienceCard from "../components/Experience/ExperienceCard";
import { experience } from "../data/experience";

function Experience() {
  return (
    <div className="container mx-auto px-10 sm:px-16 md:px-20 lg:px-35">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index} // Preferably use a unique id if available
            image={exp.image}
            name={exp.name}
            title={exp.title}
            oneLiner={exp.oneLiner}
            url={exp.url}
            date={exp.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
