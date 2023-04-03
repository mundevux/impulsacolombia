import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const CardProjects = ({ image, logo, title, text, link }) => {
  
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-64 object-cover" src={image} alt={title} />
        <div className="p-4">
          <div className='flex items-center justify-start'>
            <img className="w-12 h-12 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" src={logo} alt={title} />
            <Link to={link} className=" text-lg sm:text-xl font-bold ml-2 hover:text-amber-500 cursor-pointer">{title}</Link>
          </div>
          <p className="text-shark-900 text-base">{text}</p>
          <Link to={link} className="inline-block mt-4 bg-amber-400 hover:bg-amber-500 transition text-white text-sm md:text-base font-bold rounded-lg p-2">
            Me interesa
          </Link>
        </div>
      </div>
    );
  };
  

export default CardProjects;
