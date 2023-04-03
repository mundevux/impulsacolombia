import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ImageGallery } from "../Components/ImageGallery";
import { ContactForm } from "../Components/ContactForm";

import logoCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png'
import fachadaCerasusMonteblanco from '/src/assets/img/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg'
import renderMonteblanco1 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_bicicletero.jpg'
import renderMonteblanco2 from '/src/assets/img/Cerasus_Monteblanco/Monteblanco_nuevo_proyecto_VIS_parque.jpg'


export function CerasusMonteblanco(){

    const imageProject = [
        {
            id: 1,
            src: fachadaCerasusMonteblanco,
            alt: 'Fachada Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
        {
            id: 2,
            src : renderMonteblanco1,
            alt: 'Render Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
        {
            id: 3,
            src : renderMonteblanco2,
            alt: 'Render Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá'
        },
    ]

    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto py-10">
                <img src={fachadaCerasusMonteblanco} alt="Fachada Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className="w-full h-96 object-cover rounded-lg shadow shadow-shark-500/40 transition-all duration-500 cursor-pointer filter grayscale hover:grayscale-0" />
                <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
                    <img src={logoCerasusMonteblanco} alt="Logo Conjunto Residencial Cerasus Monteblanco apartamentos Vis en Bogotá" className=" w-52 h-52 rounded-full object-cover border-[1px] border-shark-600 shadow shadow-shark-500/40" />
                </div>
                <div className="flex flex-col items-center justify-center text-center pb-5 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-shark-900">Cerasus Monteblanco</h1>
                    <p className="text-lg md:text-xl font-medium text-shark-700">Apartamentos en venta en Bogotá</p>
                    <p className="text-lg md:text-xl font-medium text-shark-700">El hogar de tus sueños en una ubicación privilegiada</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center px-6">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            ¿Estás buscando una vivienda asequible y de alta calidad en una zona tranquila? ¡Cerasus Monteblanco es el lugar perfecto para ti!
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Este proyecto inmobiliario de viviendas de interés social (VIS) cuenta con un total de 162 viviendas de 42 mt2 cada una, diseñadas para ofrecer a las familias un espacio cómodo y funcional. Cada vivienda cuenta con 3 habitaciones, 2 baños, sala, cocina, comedor y cuarto de ropas para satisfacer todas tus necesidades.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            Además, el proyecto cuenta con una serie de comodidades para que disfrutes de tu hogar al máximo. El salón comunal es el lugar perfecto para celebrar reuniones con tus amigos y familiares, mientras que la zona BBQ te permite disfrutar de deliciosas comidas al aire libre. Para aquellos que quieren mantenerse en forma, el gimnasio ofrece una amplia variedad de equipos para entrenar.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            En Cerasus Monteblanco, no solo tendrás un hogar cómodo y funcional, sino que también estarás ubicado en una zona privilegiada. La ubicación del proyecto ha sido elegida cuidadosamente para ofrecerte una vida tranquila y segura, pero al mismo tiempo, cerca de todo lo que necesitas.
                        </p>
                        <p className="text-base md:text-lg font-medium text-shark-900 pb-2">
                            No esperes más para tener la vida que siempre has querido y hacer realidad tus sueños de tener una casa propia. ¡Visítanos y descubre todo lo que Cerasus Monteblanco tiene para ofrecer!
                        </p> 
                    </div>    
                    <ImageGallery images={imageProject} firstImageIndex={0}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}