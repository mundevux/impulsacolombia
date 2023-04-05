import React from "react";
import { useState, useEffect } from "react";

const ImageGallery = ({ images }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  return (
    <div className="grid gap-4 pb-5">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={images[0].src} alt=""/>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={images[1].src === undefined ? "" : images[1].src} alt=""/>
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={images[2].src === undefined ? "" : images[2].src} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;