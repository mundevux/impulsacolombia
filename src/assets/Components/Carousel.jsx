import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

import logoMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png';
import fachadaMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg';
import logoDanubio from '/src/assets/img/Creasus_Danubio/Logo_Cerasus_Danubio.png';
import fachadaDanubio from '/src/assets/img/Creasus_Danubio/Fachada_Cerasus_Danubio.png';
import logoUsme from '/src/assets/img/Cerasus_Usme/Logo_Cerasus_Usme.png';
import fachadaUsme from '/src/assets/img/Cerasus_Usme/Fachada_Cerasus_Usme.jpg';
import logoTunja from '/src/assets/img/Avium_Tunja/Logo_Avium_Tunja.png';
import fachadaTunja from '/src/assets/img/Avium_Tunja/Fachada_Avium_Tunja.jpg';

const Carousel = () => {

  const projectsData = [
    {
      image: fachadaMonteblanco,
      logo: logoMonteblanco,
      title: 'Cerasus Monteblanco',
      text: 'Un nuevo Proyecto de Vivienda de Interés Social en Bogotá, un proyecto VIS A OTRO NIVEL.',
      link: 'https://www.google.com',
    },
    {
      image: fachadaDanubio,
      logo: logoDanubio,
      title: 'Cerasus Danubio',
      text: 'Un nuevo concepto de construcción enfocado en dirigir el proyecto hacia un factor humano mas que monetario.',
      link: 'https://www.google.com',
    },
    {
      image: fachadaUsme,
      logo: logoUsme,
      title: 'Cerasus Usme',
      text: 'Unn proyecto de vivienda VIP (interés prioritario) construido en la Calle 110 A Sur No 3 A- 40 en la Localidad de Usme.',
      link: 'https://www.google.com',
    },
    {
        image: fachadaTunja,
        logo: logoTunja,
        title: 'Avium Tunja',
        text: 'Es proyecto de vivienda de estrato 3 constrido en la calle 18 No. 1-140 del sector del Rodeo en la ciudad de Tunja.',
        link: 'https://www.google.com',
    },
  ];

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
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col'>
        <p className=' text-lg md:text-xl font-bold text-amber-600'>Nuestros </p>
        <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Proyectos</h1>
      </div>
      <Slider {...settings}>
        {projectsData.map((projectsData, index) => (
          <div key={index} className="px-2 my-4">
            <Card image={projectsData.image} logo={projectsData.logo} title={projectsData.title} text={projectsData.text} link={projectsData.link} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
