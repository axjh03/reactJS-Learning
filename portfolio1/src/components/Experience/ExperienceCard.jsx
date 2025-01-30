import React from "react";

function ExperienceCard({ image, title, oneLiner, name, url,date }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg p-4 m-2 rounded-lg transition-transform duration-300 hover:scale-105">
      {/* Logo Section */}
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-md md:mr-2 mb-2 md:mb-0"
      />

      {/* Content Section */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="text-sm text-gray-500">{oneLiner}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
