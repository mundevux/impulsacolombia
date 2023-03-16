import React from 'react'
import LogoImpulsaProyectosInmobiliarios from '/src/assets/img/Logo_Impulsa_Proyectos_Inmobiliarios.png';
import LogoAlianza from '/src/assets/img/Logo_Alianza.png';
import LogoBancodeBogota from '/src/assets/img/Logo_Banco_de_Bogota.png';
import LogoScotiabank from '/src/assets/img/Logo_Scotiabank.png';
import LogoCredicorp from '/src/assets/img/Logo_Credicorp.svg';
import Referencia from '/src/assets/img/referencia.jpg';


export function Home(){
    return(
        <div id='home' className='max-w-7xl mx-auto px-10'>
            <div  className='h-full pt-32'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white'>Descrubre tu <br></br>nuevo hogar</h1>
                        <p className='text-shark-300 text-sm md:text-base font-normal pt-5'>
                            Enfocamos nuestra energía en fomentar y gestionar proyectos urbanísticos, ofreciendo respuestas integrales y especializadas en materia de construcción. Un modelo de trabajo basado en la experiencia adquirida de las distintas sociedades que integran Impulsa América latina.
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 rounded-t-full rounded-b-[73rem]'>
                            <img src={Referencia} loading="lazy" className='p-5 rounded-t-full rounded-b-[73rem] h-full'></img>
                        </div>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 bg-white rounded-md py-12">
                    <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
                        <a href='https://impulsaproyectos.com/' target='_blank'>
                            <img src={LogoImpulsaProyectosInmobiliarios} className="h-12 w-auto mx-auto" loading="lazy" alt="Logo Impulsa Proyectos Inmobiliarios" width="" height="" />
                        </a>
                    </div>
                    <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
                        <a href='https://www.alianza.com.co/' target='_blank'>
                            <img src={LogoAlianza} className="h-12 w-auto mx-auto" loading="lazy" alt="Logo Alianza Fiduciaria" width="" height="" />
                        </a>
                    </div>
                    <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
                        <a href='https://www.bancodebogota.com/' target='_blank'>
                         <img src={LogoBancodeBogota} className="h-12 w-auto mx-auto" loading="lazy" alt="Logo Banco de Bogotá" width="" height="" />
                        </a>
                    </div>
                    <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
                        <a href='https://www.scotiabank.com/' target='_blank'>
                            <img src={LogoScotiabank} className="h-12 w-auto m-auto" loading="lazy" alt="Logo Scotiabak Colpatria" width="" height="" />
                        </a>
                    </div>
                    <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
                        <a href='https://www.credicorpcapital.com/Colombia/Paginas/NHome.aspx' target='_blank'>
                            <img src={LogoCredicorp} className="h-12 w-60 lg:w-auto mx-auto" loading="lazy" alt="Logo Credicorp Fiduciaria" width="" height="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}