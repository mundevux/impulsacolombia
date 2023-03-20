import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import projectsData from '../data/projectsData';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {projectsData.map((projectsData, index) => (
          <div key={index} className="px-2">
            <Card image={projectsData.image} logo={projectsData.logo} title={projectsData.title} text={projectsData.text} link={projectsData.link} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
