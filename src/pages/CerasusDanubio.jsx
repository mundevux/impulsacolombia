import React from 'react';
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import { Carousel } from 'flowbite-react';
import { Helmet } from 'react-helmet';
import Iframe from 'react-iframe';
import Ubication from '../Components/Ubication';
import PropertiesOfProjects from "../Components/PropertiesOfProjects";
import iconWaze from '/src/assets/img/iconWaze.png'
import iconMaps from '/src/assets/img/iconMaps.png'
import fachadaDanubio from '/src/assets/img/Cerasus_Danubio/Fachada_Cerasus_Danubio.png';
import logoDanubio from '/src/assets/img/Cerasus_Danubio/Logo_Cerasus_Danubio.png';
import renderHabitacion from '/src/assets/img/Cerasus_Danubio/renderHabitacion.jpg';
import renderSala from '/src/assets/img/Cerasus_Danubio/renderSala.jpg';
import renderUrbanismo from '/src/assets/img/Cerasus_Danubio/renderUrbanismo.jpg';
import renderApartamento from '/src/assets/img/Cerasus_Danubio/renderApartamento.jpg';
import coffeeWork from '/src/assets/img/Cerasus_Danubio/Coffee-Work-apartamento.png';
import guarderia from '/src/assets/img/Cerasus_Danubio/Ludoteca-apartamento.png';
import salonMultiple from '/src/assets/img/Cerasus_Danubio/Salon-social-apartamento.png';
import terraza from '/src/assets/img/Cerasus_Danubio/Terraza-comunal-apartamento.png';
import zonaBbq from '/src/assets/img/Cerasus_Danubio/Zona-de-fogatas-apartamento.png';

export function CerasusDanubio(){

    const salaDeVentas = {
        nameUbication: 'Sala de Ventas Cerasus Danubio',
        linkDirection: 'https://goo.gl/maps/P4QVWpA8YktM7oT3A',
        direction: 'Calle 56 Sur # 5A - 26',
        city: 'Bogotá, Colombia',
        refPhone: 'tel:+573023399804',
        phone: '(302) 339 9804',
        textWhatsApp: 'WhatsApp: ',
        refWhatsApp: 'https://wa.me/573023399804',
        whatsapp: '(302) 339 9804',
        textEmail: 'Email: ',
        refEmail: 'mailto:ventas@cerasusdanubio.com',
        email: 'ventas@cerasusdanubio.com',
        imageWaze: iconWaze,
        refWaze: 'https://www.waze.com/en/live-map/directions/co/bogota/bogota/cerasus-danubio?place=ChIJ64X1ewSiP44RYGabeP9Y-VI',
        textWaze: 'Llega con Waze',
        imageMaps: iconMaps,
        refMaps: 'https://goo.gl/maps/U9ButoEEBxfJdnvT8', 
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
            src: fachadaDanubio,
            alt: 'Fachada Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá'
        },
        {
            src : renderHabitacion,
            alt: 'Render Habitación principal del Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá'
        },
        {
            src : renderSala,
            alt: 'Render Sala del Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá'
        },
        {
            src : renderUrbanismo,
            alt: 'Render Urbanismo del Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá'
        },
        {
            src : renderApartamento,
            alt: 'Render Apartamento del Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá'
        },
    ]

    const features = [
        {
            image: coffeeWork,
            imageAlt: 'Work Office proyecto Cerasus Danubio',
            name: 'Work Office',
        },
        {
            image: guarderia,
            imageAlt: 'Guardería proyecto Cerasus Danubio',
            name: 'Guardería',
        },
        {
            image: salonMultiple,
            imageAlt: 'Salón Multiple proyecto Cerasus Danubio',
            name: 'Salón Multiple',
        },
        {
            image: terraza,
            imageAlt: 'Terraza proyecto Cerasus Danubio',
            name: 'Terraza',
        },
        {
            image: zonaBbq,
            imageAlt: 'Zona Bbq proyecto Cerasus Danubio',
            name: 'ZonaBbq',
        },
    ]

    return(
        <div>
            <Helmet>
                <title>Cerasus Danubio | Vivienda de Interés Social en Bogotá</title>
                <meta name="description" content="Cerasus Danubio es un conjunto residencial de vivienda de interés social en Bogotá, con apartamentos de 2 y 3 habitaciones, con excelentes acabados y ubicación privilegiada." />
            </Helmet>    
            <Header />
            <div className="max-w-7xl mx-auto py-10 px-4 xl:px-6">
                <img src={fachadaDanubio} alt="Fachada Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá" className="w-full h-96 object-cover rounded-lg shadow " />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoDanubio} alt="Logo Conjunto Residencial Cerasus Danubio apartamentos Vis en Bogotá" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900 pb-4">Cerasus Danubio</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Apartamentos en venta en Bogotá</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Proyecto VIS Bogotá</p>
                    <div className="w-full">
                        <ul className="flex justify-around md:justify-center my-3">
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Área de 37m2
                            </li>
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Hasta 150 SMMLV
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-1 bg-amber-300 rounded-sm mt-4 mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-5 ">
                    <div className="flex flex-col items-center ">
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Un nuevo concepto de construcción que busca dirigir los proyectos hacia un <span className="text-amber-500">factor humano</span> mas que monetario. Por eso creamos proyectos donde sin importar el estrato socioeconómico se busca el <span className="text-amber-500">bienestar de nuestros habitantes</span>.
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
                <div id='contact' className='max-w-7xl mx-auto'>
                    <p className=' text-lg md:text-xl font-bold text-amber-600'>Hablemos</p>
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