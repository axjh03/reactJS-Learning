import React from 'react';
import ImageViewer from './ImageViewer';

function MenuItems(props) {
  return (
    <div className="h-vh mx-8 my-8 text-center flex flex-col items-center">
      <ImageViewer image={props.image} alt={props.name} />
      <h1 className="text-3xl font-bold mt-4 mb-2">{props.name}</h1> {/* Consistent spacing */}
      <h2 className="text-xl font-medium mt-2 mb-2">{props.description}</h2> {/* Consistent spacing */}
      <p className="text-lg font-extrabold mt-2">{`Rs. ${props.price}/-`}</p> {/* Consistent spacing */}
    </div>
  );
}

export default MenuItems;
