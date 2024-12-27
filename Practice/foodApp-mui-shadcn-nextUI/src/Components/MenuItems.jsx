import React, { lazy, Suspense } from 'react';
import ImageViewer from './ImageViewer';

function MenuItems(props) {
  return (
    <div className="h-vh mx-8 my-8 text-center flex flex-col items-center">
      <Suspense fallback={<div className="w-64 h-64 bg-gray-200 animate-pulse rounded-lg"></div>}>
        <img 
          src={props.image} 
          alt={props.name}
          loading="lazy"
          className="w-64 h-64 object-cover rounded-lg"
          decoding="async"
        />
      </Suspense>
      <h1 className="text-3xl font-bold mt-4 mb-2">{props.name}</h1> {/* Consistent spacing */}
      <h2 className="text-xl font-medium mt-2 mb-2">{props.description}</h2> {/* Consistent spacing */}
      <p className="text-lg font-extrabold mt-2">{`Rs. ${props.price}/-`}</p> {/* Consistent spacing */}
    </div>
  );
}

export default MenuItems;
