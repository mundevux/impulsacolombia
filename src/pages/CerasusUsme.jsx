import React from 'react';
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import Iframe from 'react-iframe';
import Ubication from '../Components/Ubication';
import { Carousel } from 'flowbite-react';
import PropertiesOfProjects from "../Components/PropertiesOfProjects";
import iconWaze from '/src/assets/img/iconWaze.png'
import iconMaps from '/src/assets/img/iconMaps.png'
import logoUsme from '/src/assets/img/Cerasus_Usme/Logo_Cerasus_Usme.png';
import fachadaUsme from '/src/assets/img/Cerasus_Usme/Fachada_Cerasus_Usme.jpg';
import fachadaUsme1 from '/src/assets/img/Cerasus_Usme/proyecto-cerasus-usme-fachada-1.jpg';
import fachadaUsme2 from '/src/assets/img/Cerasus_Usme/proyecto-cerasus-usme-fachada-2.jpg';
import fachadaUsme3 from '/src/assets/img/Cerasus_Usme/proyecto-cerasus-usme-fachada-3.jpg';
import fachadaUsme5 from '/src/assets/img/Cerasus_Usme/proyecto-cerasus-usme-fachada-5.jpg';
import aptoModelo7 from '/src/assets/img/Cerasus_Usme/Cerasus-usme-apto-modelo-7.jpg';
import aptoModelo9 from '/src/assets/img/Cerasus_Usme/Cerasus-usme-apto-modelo-9.jpg';
import aptoModelo10 from '/src/assets/img/Cerasus_Usme/Cerasus-usme-apto-modelo-10.jpg';
import aptoModelo11 from '/src/assets/img/Cerasus_Usme/Cerasus-usme-apto-modelo-11.jpg';
import aptoModelo12 from '/src/assets/img/Cerasus_Usme/Cerasus-usme-apto-modelo-12.jpg';
import salonSocial from '/src/assets/img/Cerasus_Usme/Salon-social-apartamento.png';
import zonaFogata from '/src/assets/img/Cerasus_Usme/Zona-de-fogatas-apartamento.png';
import zonaTrote from '/src/assets/img/Cerasus_Usme/Zona-de-trote-apartamento.png';


export function CerasusUsme(){

    const salaDeVentas = {
        nameUbication: 'Sala de Ventas Cerasus Usme',
        linkDirection: 'https://goo.gl/maps/P4QVWpA8YktM7oT3A',
        direction: 'Calle 56 Sur # 5A - 26',
        city: 'Bogotá, Colombia',
        refPhone: 'tel:+573023399804',
        phone: '(302) 339 9804',
        textWhatsApp: 'WhatsApp: ',
        refWhatsApp: 'https://wa.me/573023399804',
        whatsapp: '(302) 339 9804',
        textEmail: 'Email: ',
        refEmail: 'mailto:ventas@cerasususme.com',
        email: 'ventas@cerasususme.com',
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
            src: fachadaUsme,
            alt: 'Fachada Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : fachadaUsme1,
            alt: 'Fachada del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : fachadaUsme2,
            alt: 'Fachada del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : fachadaUsme3,
            alt: 'Fachada del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : fachadaUsme5,
            alt: 'Fachada Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : aptoModelo7,
            alt: 'Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : aptoModelo9,
            alt: 'Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : aptoModelo10,
            alt: 'Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : aptoModelo11,
            alt: 'Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
        {
            src : aptoModelo12,
            alt: 'Apartamento del Conjunto Residencial Cerasus Usme, apartamentos de interes prioritario en Bogotá'
        },
    ]

    const features = [
        {
            image: salonSocial,
            imageAlt: 'Salón Social proyecto Cerasus Usme',
            name: 'Salón Social',
        },
        {
            image: zonaFogata,
            imageAlt: 'Zona BBQ proyecto Cerasus Usme',
            name: 'Zona BBQ',
        },
        {
            image: zonaTrote,
            imageAlt: 'Zona Caminata proyecto Cerasus Usme',
            name: 'Zona Caminata',
        },
    ]

    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto py-10 px-4 xl:px-6">
                <img src={fachadaUsme} alt="Fachada Conjunto Residencial Cerasus Usme apartamentos VIP en Bogotá" className="w-full h-96 object-cover rounded-lg shadow " />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoUsme} alt="Logo Conjunto Residencial Cerasus Usme apartamentos VIP en Bogotá" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900 pb-4">Cerasus Usme</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Vivienda de Interés Prioritario en Bogotá</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Proyecto de vivienda en Bogotá</p>
                    <div className="w-full">
                        <ul className="flex justify-around md:justify-center my-3">
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Área de 35m2
                            </li>
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Hasta 90 SMMLV
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-1 bg-amber-300 rounded-sm mt-4 mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-5 ">
                    <div className="flex flex-col items-center ">
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Cerasus Usme es un proyecto de vivienda VIP (interés prioritario) que construimos en la Calle 110 A Sur No 3 A- 40 del barrio Villa Israel de la Localidad de Usme. Cuenta con una ubicación privilegiada ya que se encuentra a 70 metros de la avenida al Llano y a unos 600 metros de la Avenida Caracas; además goza de cercanía a una extensa zona verde como lo es el parque Villa Alemana.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Este proyecto de vivienda VIP se desarrollo en un lote de terreno de 6.925,61 m² el cual cuenta con dos etapas construidas: la primera de 200 y la segunda de 224, para un total de 424 apartamentos distribuidos en 4 torres de 8 pisos con ascensor, la torre 1 y 2 cuentan con 12 apartamentos por piso y un apartamento dúplex, y la torre 3 y 4 cuentan con 8 apartamentos por piso.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Un edificio de parqueaderos de 3 pisos para un total de 53 parqueaderos comunales, 23 parqueaderos para visitantes, zona de bicicleteros y parque infantil.
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