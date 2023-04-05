import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import ImageGallery from "../Components/ImageGallery";
import { ContactForm } from "../Components/ContactForm";
import Iframe from 'react-iframe';
import Ubication from '../Components/Ubication';

import logoCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png'
import fachadaCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg'
import renderMonteblanco1 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_bicicletero.jpg'
import renderMonteblanco2 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_parque.jpg'
import salonDeJuegos from '/src/assets/img/Cerasus_Monteblanco/Salon-de-ninos-apartamento.png'
import salonSocial from '/src/assets/img/Cerasus_Monteblanco/Salon-social-apartamento.png'
import ludoteca from '/src/assets/img/Cerasus_Monteblanco/Ludoteca-apartamento.png'
import gimnasio from '/src/assets/img/Cerasus_Monteblanco/Gimnasio-apartamento.png'
import businessCenter from '/src/assets/img/Cerasus_Monteblanco/Business-center-apartamento.png'
import PropertiesOfProjects from "../Components/PropertiesOfProjects";


export function CerasusMonteblanco(){

    const salaDeVentas = {
        nameUbication: 'Sala de Ventas Cerasus Monteblanco',
        linkDirection: 'https://goo.gl/maps/P4QVWpA8YktM7oT3A',
        direction: 'Calle 56 Sur # 5A - 26',
        city: 'Bogotá, Colombia',
        refPhone: 'tel:+573023399804',
        phone: '(302) 339 9804',
        refWhatsApp: 'https://wa.me/573023399804',
        whatsapp: '(302) 339 9804',
        refEmail: 'mailto:ventas@cerasusmonteblanco.com',
        email: 'ventas@cerasusmonteblanco.com',
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
                <img src={fachadaCerasusMonteblanco} alt="Fachada Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className="w-full h-96 object-cover rounded-lg shadow shadow-shark-500/40 transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0" />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoCerasusMonteblanco} alt="Logo Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900">Cerasus Monteblanco</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Apartamentos en venta en Bogotá</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">El hogar de tus sueños en una ubicación privilegiada</p>
                </div>
                <div className="w-full h-1 bg-amber-300 rounded-sm mt-4 mb-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                    <div className="flex flex-col items-center ">
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            ¿Estás buscando una vivienda asequible y de alta calidad en una zona tranquila? ¡Cerasus Monteblanco es el lugar perfecto para ti!
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Este proyecto inmobiliario de viviendas de interés social (VIS) cuenta con un total de 162 viviendas de 42 mt2 cada una, diseñadas para ofrecer a las familias un espacio cómodo y funcional. Cada vivienda cuenta con 3 habitaciones, 2 baños, sala, cocina, comedor y cuarto de ropas para satisfacer todas tus necesidades.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Además, el proyecto cuenta con una serie de comodidades para que disfrutes de tu hogar al máximo. El salón comunal es el lugar perfecto para celebrar reuniones con tus amigos y familiares, mientras que la zona BBQ te permite disfrutar de deliciosas comidas al aire libre. Para aquellos que quieren mantenerse en forma, el gimnasio ofrece una amplia variedad de equipos para entrenar.
                        </p> 
                    </div>    
                    <ImageGallery images={imageProject} />
                </div>
                <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                    En Cerasus Monteblanco, no solo tendrás un hogar cómodo y funcional, sino que también estarás ubicado en una zona privilegiada. La ubicación del proyecto ha sido elegida cuidadosamente para ofrecerte una vida tranquila y segura, pero al mismo tiempo, cerca de todo lo que necesitas.
                </p>
                <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                    No esperes más para tener la vida que siempre has querido y hacer realidad tus sueños de tener una casa propia. ¡Visítanos y descubre todo lo que Cerasus Monteblanco tiene para ofrecer!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-around w-full pb-5 px-6">
                    {
                        features.map((feature, index) => (
                            <div key={index}>
                                <PropertiesOfProjects image={feature.image} imageAlt={feature.imageAlt} name={feature.name} />
                            </div>
                        ))
                    }
                </div>
                <div id='contact' className='max-w-7xl mx-auto px-4 xl:px-6'>
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
                            refWhatsApp={salaDeVentas.refWhatsApp}
                            whatsapp={salaDeVentas.whatsapp}
                            refEmail={salaDeVentas.refEmail}
                            email={salaDeVentas.email}
                            iframe={salaDeVentas.iframe}
                            />
                    </div>
                </div>    
            </div>
            <Footer />
        </div>
    )
}