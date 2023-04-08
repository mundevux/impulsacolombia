import React from 'react';
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import Iframe from 'react-iframe';
import Ubication from '../Components/Ubication';
import { Carousel } from 'flowbite-react';
import PropertiesOfProjects from "../Components/PropertiesOfProjects";
import logoCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png'
import fachadaCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg'
import renderMonteblanco1 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_bicicletero.jpg'
import renderMonteblanco2 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_parque.jpg'
import salonDeJuegos from '/src/assets/img/Cerasus_Monteblanco/Salon-de-ninos-apartamento.png'
import salonSocial from '/src/assets/img/Cerasus_Monteblanco/Salon-social-apartamento.png'
import ludoteca from '/src/assets/img/Cerasus_Monteblanco/Ludoteca-apartamento.png'
import gimnasio from '/src/assets/img/Cerasus_Monteblanco/Gimnasio-apartamento.png'
import businessCenter from '/src/assets/img/Cerasus_Monteblanco/Business-center-apartamento.png'
import iconWaze from '/src/assets/img/iconWaze.png'
import iconMaps from '/src/assets/img/iconMaps.png'


export function CerasusMonteblanco(){

   
    const salaDeVentas = {
        nameUbication: 'Sala de Ventas Cerasus Monteblanco',
        linkDirection: 'https://goo.gl/maps/P4QVWpA8YktM7oT3A',
        direction: 'Calle 56 Sur # 5A - 26',
        city: 'Bogotá, Colombia',
        refPhone: 'tel:+573023399804',
        phone: '(302) 339 9804',
        textWhatsApp: 'WhatsApp: ',
        refWhatsApp: 'https://wa.me/573023399804',
        whatsapp: '(302) 339 9804',
        textEmail: 'Email: ',
        refEmail: 'mailto:ventas@cerasusmonteblanco.com',
        email: 'ventas@cerasusmonteblanco.com',
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
            src: fachadaCerasusMonteblanco,
            alt: 'Fachada Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
        {
            src : renderMonteblanco1,
            alt: 'Render Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
        {
            src : renderMonteblanco2,
            alt: 'Render Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
    ]

    const features = [
        {
            image: salonDeJuegos,
            imageAlt: 'Salón de Juegos proyecto Cerasus Monteblanco',
            name: 'Salón de Juegos',
        },
        {
            image: salonSocial,
            imageAlt: 'Salón Social proyecto Cerasus Monteblanco',
            name: 'Salón Social',
        },
        {
            image: ludoteca,
            imageAlt: 'Ludoteca proyecto Cerasus Monteblanco',
            name: 'Ludoteca',
        },
        {
            image: gimnasio,
            imageAlt: 'Gimansio proyecto Cerasus Monteblanco',
            name: 'Gimansio',
        },
        {
            image: businessCenter,
            imageAlt: 'Business Center proyecto Cerasus Monteblanco',
            name: 'Taller Artesanal',
        },
    ]

    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto py-10 px-4 xl:px-6">
                <img src={fachadaCerasusMonteblanco} alt="Fachada Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className="w-full h-96 object-cover rounded-lg shadow " />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoCerasusMonteblanco} alt="Logo Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900 pb-4">Cerasus Monteblanco</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Apartamentos en venta en Bogotá</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">El hogar de tus sueños en una ubicación privilegiada</p>
                    <div className="w-full">
                        <ul className="flex justify-around md:justify-center my-3">
                            <li className="text-sm md:text-lg font-medium text-shark-700 mx-2">
                                <span className="text-amber-500 pr-2">•</span>
                                Área de 42m2
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
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                            ¿Estás buscando una <span className="text-amber-500">vivienda asequible</span> y de <span className="text-amber-500">alta calidad</span> en una zona tranquila? ¡Cerasus Monteblanco es el lugar perfecto para ti!
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                            Este proyecto inmobiliario de viviendas de interés social <span className="text-amber-500">(VIS)</span> cuenta con un total de 162 viviendas de 42 mt2 cada una, diseñadas para ofrecer a las familias un <span className="text-amber-500">espacio cómodo</span> y <span className="text-amber-500">funcional</span>. Cada vivienda cuenta con 3 habitaciones, 2 baños, sala, cocina, comedor y cuarto de ropas para satisfacer todas tus necesidades.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                            Además, el proyecto cuenta con una serie de comodidades para que <span className="text-amber-500">disfrutes de tu hogar al máximo</span>. El salón comunal es el lugar perfecto para celebrar reuniones con tus amigos y familiares, mientras que la zona BBQ te permite disfrutar de deliciosas comidas al aire libre. Para aquellos que quieren mantenerse en forma, el gimnasio ofrece una amplia variedad de equipos para entrenar.
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
                <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                    En Cerasus Monteblanco, no solo tendrás un hogar cómodo y funcional, sino que también estarás ubicado en una <span className="text-amber-500">zona privilegiada</span>. La ubicación del proyecto ha sido elegida cuidadosamente para ofrecerte una vida tranquila y segura, pero al mismo tiempo, cerca de todo lo que necesitas.
                </p>
                <p className="text-base md:text-lg font-medium text-shark-900 pb-2 text-justify">
                    No esperes más para tener <span className="text-amber-500">la vida que siempre has querido</span> y hacer realidad tus sueños de tener una casa propia. ¡Visítanos y descubre todo lo que Cerasus Monteblanco tiene para ofrecer!
                </p>
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
                            textWhatsapp={salaDeVentas.textWhatsapp}
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