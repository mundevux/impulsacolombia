import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ContactForm } from "../Components/ContactForm";
import { Link } from "react-router-dom";
import bannerMiCasaYa from '/src/assets/img/Blog/Blog_Mi_Casa_Ya/Subsidio-de-Mi-casa-ya-2022.jpg';
import bannerRequisitos from '/src/assets/img/Blog/Blog_Mi_Casa_Ya/Requisitos-Subsidio-de-Mi-casa-ya.jpg';

export function BlogMiCasaYa() {
    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto pt-32 px-6 xl:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
                    <div className="text-justify">
                        <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Subsidio de Mi casa ya en 2022</h1>
                        <p className='text-lg md:text-xl font-bold text-shark-900'>Hablaremos sobre el programa del gobierno colombiano llamado Mi Casa Ya, una excelente oportunidad para aquellos que buscan tener su propia casa.</p>
                    </div>
                    <img src={bannerMiCasaYa}  className="w-auto mx-auto rounded-lg shadow-md " loading="lazy" alt="Banner Subsidio de vivienda Mi casa Ya"></img>
                </div>
                <div>
                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-4'>¿Qué es Mi casa ya?</h2>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Mi Casa Ya es un programa que busca brindar acceso a la vivienda propia a los hogares colombianos, especialmente a aquellos que tienen ingresos medios y bajos. Este programa otorga subsidios a la tasa de interés y al valor de la vivienda, lo que hace que sea más fácil para las personas obtener una casa propia.</p>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>El programa está dirigido a la compra de viviendas nuevas o usadas, en proyectos urbanos o rurales. El subsidio de la tasa de interés se otorga a través de una entidad financiera que tenga convenio con el programa y puede ser de hasta el 4% del valor de la vivienda. El subsidio a la cuota inicial se otorga directamente al hogar beneficiario y puede ser de hasta 30 salarios mínimos legales vigentes.</p>    
                            
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                        <img src={bannerRequisitos}  className="w-auto mx-auto rounded-lg shadow-md " loading="lazy" alt="Banner Subsidio de vivienda Mi casa Ya"></img>
                        <div className="text-justify">
                            <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-4'>¿Qué requisitos necesito para acceder al subsidio de Mi casa ya?</h2>
                            <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Para acceder al programa, se deben cumplir con ciertos requisitos. En primer lugar, es necesario tener un ingreso mensual de entre 1 y 8 salarios mínimos legales vigentes. Además, se debe tener capacidad de pago y no haber sido propietario de una vivienda en los últimos 3 años. Para obtener mas informcaión puedes visitar el sitio oficial del programa <a href="https://minvivienda.gov.co/viceministerio-de-vivienda/mi-casa-ya" target="_blank" className="text-amber-500 hover:text-amber-500 underline  underline-offset-4">Mi Casa Ya</a>.</p>
                            <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-4'>¿Qué vivienda puedo comprar?</h2>
                            <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Los hogares podrán comprar la vivienda nueva urbana que deseen, cuyo valor no exceda los 135 salarios mínimos ($135.000.000) y para las viviendas ubicadas en los municipios y distritos definidos en el artículo 2.1.9.1 del Decreto 1077 de 2015, hasta 150 salarios mínimos ($150.000.000).</p>
                            <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Esta modalidad aplica para hogares con ingresos inferiores a 2 SMMLV ($2.000.000), quienes recibirán un subsidio a la cuota inicial hasta de 50 SMMLV ($50.000.000), más el beneficio de cobertura a la tasa de interés.</p>
                        </div>
                    </div>
                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-4'>¿Cuál es el trámite para acceder al subsidio mi casa ya?</h2>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Los hogares deben seleccionar la vivienda de su preferencia, que se ajuste a sus capacidades económicas y dirigirse al establecimiento de crédito de su elección o al Fondo Nacional del Ahorro.</p>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Allí se verificarán las características de los hogares y se les informará si pueden ser beneficiarios o no, sin postulaciones previas, a través de una consulta en línea que hace el establecimiento en un aplicativo diseñado para tal fin.</p>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>En caso de obtener una respuesta positiva, el hogar debe continuar con el trámite que tenga el establecimiento de crédito para la aprobación de un crédito hipotecario.</p>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>Una vez aprobado el crédito por parte del establecimiento de crédito, este se encargará de solicitar la asignación del subsidio y del trámite del desembolso del crédito.</p>
                    <h2 className=' text-xl md:text-2xl font-bold text-amber-500 pb-4'>Proyectos de vivienda que aplican a mi casa ya</h2>
                    <p className='text-base md:text-lg font-medium text-shark-900 pb-5'>
                        <Link to={'/cerasus-monteblanco'} className="text-base md:text-lg font-bold text-amber-500 " >Cerasus Monteblanco</Link>: Proyecto de vivienda VIS en Bogotá, es un proyecto vis recientemente lanzado, proyecto ideal para invertir y aprovechar los cómodos plazos de pago, ya que son proyectos de vivienda de interés social. Ubicado en Usme, cuenta con espacios desde 40 mt2 hasta los 45 mt2, dos torres de 10 pisos desde $143 millones.
                    </p>

                </div>
                <div id='contact' className=' mx-auto px-6 xl:px-6'>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}