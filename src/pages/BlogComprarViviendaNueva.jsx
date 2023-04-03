import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import { Link } from "react-router-dom";
import bannerConsejos from '/src/assets/img/Blog/Consejos_Vivienda_Nueva/consejos-para-comprar-vivienda-nueva.jpg';
import bannerComprar from '/src/assets/img/Blog/Consejos_Vivienda_Nueva/comprar-vivienda-nueva.jpg'

export function BlogComprarViviendaNueva() {
    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto pt-32 px-6 xl:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
                    <img src={bannerConsejos}  className="w-auto mx-auto rounded-lg shadow-md " loading="lazy" alt="Banner Consejos para Comprar Vivienda Nueva"></img>
                    <div className="">
                        <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Consejos para comprar vivienda nueva</h1>
                        <p className='text-lg md:text-xl font-bold text-shark-900'>Hoy hablaremos sobre algunos consejos útiles para comprar una vivienda nueva en Colombia. Sabemos que la compra de una vivienda es una de las decisiones más importantes que tomamos en la vida, por lo que es fundamental estar bien informados y preparados para hacer una elección acertada.</p>
                    </div>
                </div>
                <div>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Actualmente la oferta de vivienda se ha ampliado en el territorio nacional, sin embargo, en muchos casos no se está seguro de la compra de vivienda por diversos motivos, como la limitación para acceder a subsidios de vivienda. Sin embargo, esto ha cambiado durante los últimos años, permitiendo a una gran cantidad de familias cumplir su sueño de vivienda propia.  </p>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Es por eso que hoy tenemos cinco tips para que puedas comprar vivienda en el 2022.</p>    
                            
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                        <div className="text-justify">
                            <ol className="">
                                <li>
                                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-2'>Hágase una autoevaluación financiera: </h2>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>Lo primero y antes de comprar vivienda, es importante hacer un análisis de su situación financiera, pues aquí lo más importante es determinar nuestros ingresos y el capital que tenemos disponible para la cuota inicial, recuerde que este capital puede ser familiar. </p>
                                </li>
                                <li>
                                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-2'>Considere el seguir pagando arriendo </h2>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>Compare los costos de comprar y los de arriendo, se dará cuenta que comprar sale mejor que seguir pagando arriendo, pues con los costos de arriendo puede mantener las cuotas de su vivienda nueva, (este consejo aplica para aquellos proyectos que ya estén construidos o están a punto de entregarse), esto lo puede acordar con los asesores para que se ajuste a su presupuesto, de igual manera con los subsidios de vivienda puede solventar algunos costos.</p>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>También para los que desean comprar sobre planos, hay nuevos subsidios para la compra de vivienda nueva, lo puede hablar con los asesores y recuerde que “comprar es mejor que arrendar”.</p>
                                </li>
                                <li>
                                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-2'>Piense como inversionista: </h2>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>Uno de sus objetivos también será hacer la mejor inversión posible. La mejor forma de lograrlo es buscando las áreas con las mejores zonas, en los sitios que pueden ser de su mayor interés como zonas escolares o universitarias, supermercados, vías de acceso, proyecciones para el futuro de construcciones en la zona, entre otros. </p>
                                </li>
                                <li>
                                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-2'>Piense en inversión a largo plazo: </h2>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>Se recomienda que la compra de vivienda sea una inversión a largo plazo. Se recomienda comprar con la perspectiva de mantenerla por lo menos cinco años o más, pues después de este tiempo se empieza a valorizar la vivienda. </p>

                                </li>
                                <li>
                                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-2'>Los subsidios al alcance de tu mano: </h2>
                                    <p className='text-base md:text-lg font-medium text-shark-900 pb-3'>Recuerda averiguar los subsidios que puedes aplicar del gobierno, estos te ayudarán a aliviar los costos de compra de vivienda. Además si puedes aplicar recuerda averiguar cuales son las mejores ofertas en las constructoras, también estas te pueden asesorar para que apliques a la mejor. </p>

                                </li>
                            </ol>
                        </div>
                        <img src={bannerComprar}  className="w-auto mx-auto rounded-lg shadow-md " loading="lazy" alt="Banner Cinco Tips para compra de Vivienda Nueva"></img>
                    </div>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>En conclusión, la compra de una vivienda es una decisión importante que requiere de tiempo, paciencia y una buena planificación. Con estos consejos, estarás más preparado para realizar una elección acertada y hacer de tu hogar un espacio cómodo y seguro.</p>
                </div>
                <div id='contact' className=' mx-auto px-6 xl:px-6'>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}