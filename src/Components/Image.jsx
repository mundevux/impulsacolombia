import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <img className="w-full" src={src} alt={alt} />
  );
};

export default Image;