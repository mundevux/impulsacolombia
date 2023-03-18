import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

const Carousel = () => {

    const cards = [
        {
          image: '/src/assets/img/Fachada_Cerasus_Monteblanco.jpg',
          logo: '/src/assets/img/Logo_Cerasus_Monteblanco.png',
          title: 'Cerasus Monteblanco',
          text: 'Un nuevo Proyecto de Vivienda de Interés Social en Bogotá, un proyecto VIS A OTRO NIVEL.',
          link: 'https://www.google.com',
        },
        {
          image: '/src/assets/img/Fachada_Cerasus_Danubio.png',
          logo: '/src/assets/img/Logo_Cerasus_Danubio.png',
          title: 'Cerasus Danubio',
          text: 'Un nuevo concepto de construcción enfocado en dirigir el proyecto hacia un factor humano mas que monetario.',
          link: 'https://www.google.com',
        },
        {
          image: '/src/assets/img/Fachada_Cerasus_Usme.jpg',
          logo: '/src/assets/img/Logo_Cerasus_Usme.png',
          title: 'Cerasus Usme',
          text: 'Unn proyecto de vivienda VIP (interés prioritario) construido en la Calle 110 A Sur No 3 A- 40 en la Localidad de Usme.',
          link: 'https://www.google.com',
        },
        {
            image: '/src/assets/img/Fachada_Avium_Tunja.jpg',
            logo: '/src/assets/img/Logo_Avium_Tunja.png',
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
            },
          },
        ],
      };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <Card image={card.image} logo={card.logo} title={card.title} text={card.text} link={card.link} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
