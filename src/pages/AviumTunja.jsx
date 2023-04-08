import React from 'react';
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import Iframe from 'react-iframe';
import Ubication from '../Components/Ubication';
import { Carousel } from 'flowbite-react';
import { Helmet } from 'react-helmet';
import PropertiesOfProjects from "../Components/PropertiesOfProjects";
import iconWaze from '/src/assets/img/iconWaze.png'
import iconMaps from '/src/assets/img/iconMaps.png'
import logoTunja from '/src/assets/img/Avium_Tunja/Logo_Avium_Tunja.png';
import fachadaTunja from '/src/assets/img/Avium_Tunja/Fachada_Avium_Tunja.jpg';
import cocina from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-COCINA.jpg';
import gimnasio from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-gimnasio.jpg'; 
import piscina from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-piscina.jpg';
import comedor from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-sala-comedor.jpg';
import alcoba1 from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-TIPO-B-ALCOBA.jpg';
import alcoba2 from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-TIPO-B-ALCOBA-2.jpg';
import cocinaTipoB from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-TIPO-B-COCINA.jpg';
import salaTipoB from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-TIPO-B-SALA.jpg';
import alcobaTipoD from '/src/assets/img/Avium_Tunja/apartamentos-en-tunja-TIPO-D-ALCOBA-2.jpg';
import iconPiscina from '/src/assets/img/Avium_Tunja/Piscina-apartamento.png';
import iconGimnasio from '/src/assets/img/Avium_Tunja/Gimnasio-apartamento.png';
import salonMultiple from '/src/assets/img/Avium_Tunja/Salon-social-apartamento.png';
import terraza from '/src/assets/img/Avium_Tunja/Terraza-comunal-apartamento.png';
import aptoTipoA from '/src/assets/img/Avium_Tunja/apto-tipo-A-55mt-tunja.jpg';
import aptoTipoB from '/src/assets/img/Avium_Tunja/apto-tipo-B-54mt-tunja.jpg';
import aptoTipoC from '/src/assets/img/Avium_Tunja/apto-tipo-C-47mt-tunja.jpg';

export function AviumTunja(){

    const salaDeVentas = {
        nameUbication: 'Sala de Ventas Avium Tunja',
        linkDirection: 'https://goo.gl/maps/UdksHRqTRFEAz8mj9',
        direction: 'Calle 18 # 2 - 00',
        city: 'Tunja, Colombia',
        refPhone: 'tel:+573502812097',
        phone: '(350) 281 2097',
        textWhatsApp: 'WhatsApp: ',
        refWhatsApp: 'https://wa.me/573502812097',
        whatsapp: '(350) 281 2097',
        textEmail: 'Email: ',
        refEmail: 'mailto:ventas@aviumtunja.com',
        email: 'ventas@aviumtunja.com',
        imageWaze: iconWaze,
        refWaze: 'https://www.waze.com/en/live-map/directions/co/boyaca/tunja/conjunto-residencial-avium-tunja?place=ChIJZUD6S2F9ao4RGovpFnDL-K8',
        textWaze: 'Llega con Waze',
        imageMaps: iconMaps,
        refMaps: 'https://goo.gl/maps/UdksHRqTRFEAz8mj9', 
        textMaps: 'Llega con Maps',   
        iframe: <Iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1988.6425980615309!2d-74.11951147924401!3d4.542599976786291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa2047bf585eb%3A0x52f958ff789b6660!2scerasus%20danubio!5e0!3m2!1ses!2sco!4v1680648024910!5m2!1ses!2sco"
                    className='w-full h-full rounded-md'
                    frameBorder="0"
                    loading='lazy'
                    allowFullScreen
                /> ,
    }

    const imageProject = [
        {
            src: fachadaTunja,
            alt: 'Fachada Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : piscina,
            alt: 'Piscina del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : gimnasio,
            alt: 'Gimansio del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : alcoba1,
            alt: 'Render Urbanismo del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : alcoba2,
            alt: 'Render Apartamento del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : alcobaTipoD,
            alt: 'Render Urbanismo del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : cocina,
            alt: 'Render Apartamento del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : comedor,
            alt: 'Render Apartamento del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : cocinaTipoB,
            alt: 'Render Urbanismo del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
        {
            src : salaTipoB,
            alt: 'Render Apartamento del Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja'
        },
    ]

    const features = [
        {
            image: iconPiscina,
            imageAlt: 'Piscina proyecto Avium Tunja',
            name: 'Piscina',
        },
        {
            image: iconGimnasio,
            imageAlt: 'Gimnasio proyecto Avium Tunja',
            name: 'Gimnasio',
        },
        {
            image: salonMultiple,
            imageAlt: 'Salón Multiple proyecto Avium Tunja',
            name: 'Salón Multiple',
        },
        {
            image: terraza,
            imageAlt: 'Terraza proyecto Avium Tunja',
            name: 'Terraza',
        },
    ]

    return(
        <div>
            <Helmet>
                <title>Avium Tunja | Apartamentos con piscina en Tunja</title>
                <meta name="description" content="Conjunto Residencial Avium Tunja, apartamentos con piscina en Tunja, Boyacá. Conoce más sobre este proyecto de apartamentos en Tunja, Boyacá." />

            </Helmet>
            <Header />
            <div className="max-w-7xl mx-auto py-10 px-4 xl:px-6">
                <img src={fachadaTunja} alt="Fachada Conjunto Residencial Avium Tunja apartamentos con piscina en Tunja" className="w-full h-96 object-cover rounded-lg shadow " />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoTunja} alt="Logo Conjunto Residencial Avium Tunja apartamentos con piscina en Tunja" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900 pb-4">Avium Tunja</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Apartamentos en venta en Tunja con piscina</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Proyecto de vivienda en Tunja</p>
                    <div className="w-full">
                        <ul className="flex justify-around md:justify-center my-3">
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Área de 47m2
                            </li>
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Hasta 170 SMMLV
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-1 bg-amber-300 rounded-sm mt-4 mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-5 ">
                    <div className="flex flex-col items-center ">
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                            Avium Tunja es proyecto de vivienda de estrato 3 que está construido en la calle 18 No. 1-140 del sector del Rodeo en la ciudad de Tunja. Cuenta con una <span className="text-amber-500">ubicación privilegiada</span> ya que se encuentra cerca al centro comercial Unicentro, a la nueva terminal de transporte, al Batallón Bolívar, a la Avenida Universitaria y a la Avenida Oriental. Un total de 408 apartamentos distribuidos en <span className="text-amber-500">4 torres de 8 apartamentos</span> por piso, dos de ellas con una altura de 11 pisos y las otras dos de 16 pisos, cada una con 2 ascensores.
                        </p>
                    </div>    
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 shadow-lg">
                        <Carousel>
                            {imageProject.map((image, index) => (
                                <img key={index} src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg shadow" />
                            ))}
                        </Carousel>
                    </div>
                </div>
                
                <h2 className=' text-2xl md:text-4xl font-bold text-amber-400 pt-4 text-center'>Características</h2>
                <div className="flex flex-auto flex-wrap items-center justify-around w-full pb-5 px-6">
                    {
                        features.map((feature, index) => (
                            <div key={index}>
                                <PropertiesOfProjects image={feature.image} imageAlt={feature.imageAlt} name={feature.name} />
                            </div>
                        ))
                    }
                </div>

                <div>
                    <p className=' text-lg md:text-xl font-bold text-amber-500'>Nuestras</p>
                    <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5'>Tipologías</h1>
                    <div className='grid grid-cols-3 gap-6 justify-center items-center flex-wrap my-12'>
                        <div className='flex flex-col items-center col-span-3 lg:col-span-1 my-5'>
                            <img className=' w-full  h-80 rounded-lg object-cover border-shark-600 shadow shadow-shark-500/40 mb-4' src={aptoTipoA} alt='Apartamento tipo A del Conjunto Avium Tunja' />
                            <h2 className='text-xl md:text-2xl font-bold text-amber-500 mb-4'>Apartamentos Tipo A</h2>
                            <p className='text-lg md:text-xl font-bold text-shark-900 text-center'>Apatamentos de 55m2 con 3 Habitaciones, 2 baños, sala comedor, cocina, zona de ropas y parqueadero</p>
                        </div>
                        <div className='flex flex-col items-center col-span-3 lg:col-span-1 my-5'>
                            <img className=' w-full  h-80 rounded-lg object-cover border-shark-600 shadow shadow-shark-500/40 mb-4' src={aptoTipoB} alt='Apartamento tipo A del Conjunto Avium Tunja' />
                            <h2 className='text-xl md:text-2xl font-bold text-amber-500 mb-4'>Apartamentos Tipo B</h2>
                            <p className='text-lg md:text-xl font-bold text-shark-900 text-center'>Apatamentos de 54m2 con 3 Habitaciones, 2 baños, sala comedor, cocina, zona de ropas y parqueadero</p>
                        </div>
                        <div className='flex flex-col items-center col-span-3 lg:col-span-1 my-5'>
                            <img className=' w-full h-80 rounded-lg object-cover border-shark-600 shadow shadow-shark-500/40 mb-4' src={aptoTipoC} alt='Apartamento tipo A del Conjunto Avium Tunja' />
                            <h2 className='text-xl md:text-2xl font-bold text-amber-500 mb-4'>Apartamentos Tipo C</h2>
                            <p className='text-lg md:text-xl font-bold text-shark-900 text-center'>Apatamentos de 47m2 con 2 Habitaciones, 2 baños, sala comedor, cocina, zona de ropas y parqueadero</p>
                        </div>
                    </div>
                </div>
                <div id='contact' className='max-w-7xl mx-auto'>
                    <p className=' text-lg md:text-xl font-bold text-amber-500'>Hablemos</p>
                    <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Es fácil contactarnos</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <ContactForm />
                        <Ubication 
                            nameUbication={salaDeVentas.nameUbication} 
                            linkDirection={salaDeVentas.linkDirection}
                            direction={salaDeVentas.direction} 
                            city={salaDeVentas.city}
                            refPhone={salaDeVentas.refPhone}
                            phone={salaDeVentas.phone}
                            textWhatsapp={salaDeVentas.textWhatsApp}
                            refWhatsApp={salaDeVentas.refWhatsApp}
                            whatsapp={salaDeVentas.whatsapp}
                            refEmail={salaDeVentas.refEmail}
                            textEmail={salaDeVentas.textEmail}
                            email={salaDeVentas.email}
                            iconWaze={salaDeVentas.imageWaze}
                            wazeLink={salaDeVentas.refWaze}
                            textWaze={salaDeVentas.textWaze}
                            iconMaps={salaDeVentas.imageMaps}
                            mapsLink={salaDeVentas.refMaps}
                            textMaps={salaDeVentas.textMaps}
                            iframe={salaDeVentas.iframe}
                            />
                    </div>
                </div>    
            </div>
            <Footer />
        </div>
    )
}