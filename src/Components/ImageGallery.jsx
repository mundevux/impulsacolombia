import React from 'react';
import Image from './Image';

export function ImageGallery({ images, firstImageIndex  }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Image 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            className={index === firstImageIndex ? "col-span-2 row-span-2" : ""}
            />
      ))}
    </div>
  );
};

