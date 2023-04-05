import React from 'react';


const Ubication = ({nameUbication, linkDirection, direction, city, refPhone, phone, refWhatsApp, whatsapp, refEmail, email,iframe}) => {
    return (
            <div className="flex flex-col justify-center bg-shark-900 shadow-md rounded-md px-8 py-4">
                <h2 className=" text-amber-400 text-3xl font-bold mb-2">{nameUbication}</h2>
                <a href={linkDirection} className='text-shark-50 text-lg md:text-xl font-normal' target='_blank'>{direction}</a>
                <p className='text-shark-300 text-base font-normal -mt-2 pb-2'>{city}</p>
                <div className='flex items-center pb-2'>
                    <h3 className='text-shark-100 font-semibold text-base md:text-xl'>Teléfono: </h3>
                    <a href={refPhone} className='text-shark-50 text-sm md:text-base font-normal pl-2'>{phone}</a>
                </div>
                <div className='flex items-center pb-2'>
                    <h3 className='text-shark-100 font-semibold text-base md:text-xl'>WhatsApp: </h3>
                    <a href={refWhatsApp} className='text-shark-50 text-base font-normal pl-2'>{whatsapp}</a>
                </div>
                <div className='flex items-center pb-2'>
                    <h3 className='text-shark-100 font-semibold text-base md:text-xl'>Email: </h3>
                    <a href={refEmail} className='text-shark-50 text-base font-normal pl-2'>{email}</a>
                </div>
                {iframe}
            </div>    
    )
};

export default Ubication;