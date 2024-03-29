import React, { useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { CarouselProjects } from "../Components/CarouselProjects";
import { BlogSection } from "../Components/BlogSeccion";
import { ContactForm } from "../Components/ContactForm";
import { Helmet } from "react-helmet";
import LogoImpulsaProyectosInmobiliarios from "/src/assets/img/Logo_Impulsa_Proyectos_Inmobiliarios.png";
import LogoAlianza from "/src/assets/img/Logo_Alianza.png";
import LogoBancodeBogota from "/src/assets/img/Logo_Banco_de_Bogota.png";
import LogoScotiabank from "/src/assets/img/Logo_Scotiabank.png";
import LogoCredicorp from "/src/assets/img/Logo_Credicorp.svg";
import Counter from "../Components/Counter";
import Iframe from "react-iframe";
import Ubication from "../Components/Ubication";
import iconWaze from "/src/assets/img/iconWaze.png";
import iconMaps from "/src/assets/img/iconMaps.png";
import Banner from "../Components/Banner";

export function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const onClose = () => {
    setShowBanner(false);
  };

  const oficinaPrincipal = {
    nameUbication: "Oficina Principal",
    linkDirection: "https://maps.app.goo.gl/x7mnoptgnBSsD5JF9",
    direction: "Calle 98 # 22 - 64 Oficina 701",
    city: "Bogotá, Colombia",
    refPhone: "tel:+576017942134",
    phone: "(601) 794 2134",
    textWhatsapp: "WhatsApp: ",
    refWhatsApp: "https://wa.me/573176676375",
    whatsapp: "(317) 667 6375",
    textEmail: "Email: ",
    refEmail: "mailto:info@impulsacolombia.com.co",
    email: "info@impulsacolombia.com.co",
    imageWaze: iconWaze,
    refWaze:
      "https://www.waze.com/en/live-map/directions/co/bogota/bogota/cl.-98-22-64?place=ChIJR-Db4vqbP44RsIwNQZz6t0s",
    textWaze: "Llega con Waze",
    imageMaps: iconMaps,
    refMaps: "https://maps.app.goo.gl/x7mnoptgnBSsD5JF9",
    textMaps: "Llega con Maps",
    iframe: (
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.483593473529!2d-74.0558533!3d4.6856966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aea84a8a0bd%3A0xc7c2bc3978f19d3a!2sCl.%2098%20%2322-64%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1695653019205!5m2!1ses!2sco"
        title="Oficina Principal"
        className="w-full h-full rounded-md"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
      />
    ),
  };

  return (
    <div className=" bg-shark-900">
      <Helmet>
        <title>Impulsa Colombia | Proyectos Inmobiliarios</title>
        <meta
          name="description"
          content="Impulsa Colombia es una empresa de proyectos inmobiliarios que ofrece vivienda de interés social y vivienda de interés prioritario en Colombia, ofreciendo calidad y seguridad a nuestros clientes."
        />
        <meta
          name="keywords"
          content="Proyectos Inmobiliarios, Vivienda de interés social, Vivienda de interés prioritario, Edificios residenciales en Colombia, Proyectos de vivienda en Colombia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Impulsa Colombia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />
      {/*{showBanner && <Banner onClose={onClose} />}*/}
      <div className="max-w-7xl mx-auto pt-32 px-4 xl:px-6">
        <div className="flex flex-col justify-around items-center">
          <div className="flex flex-col justify-center items-start w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center w-full md:pt-10">
              IMPULSA EN EL MUNDO
            </h1>
            <p className="text-shark-300 text-base md:text-xl font-normal w-full py-5 text-center">
              Impulsa Colombia forma parte de un grupo Internacional de empresas
              conformado por un equipo de profesionales que dan vida a la
              filosofía de la compañía: Máxima Calidad, Profesionalidad,
              Servicio impecable al cliente y riguroso cumplimiento de los
              plazos en todas las áreas de trabajo donde participamos.
            </p>
            <p className="text-shark-200 text-xl md:text-2xl font-normal w-full py-5 text-center">
              ¡Esa es nuestra fórmula del éxito!
            </p>
            <div className="w-full grid grid-cols-3 gap-6 justify-center items-center mt-10">
              <div className="col-span-3 md:col-span-1">
                <h2 className="text-2xl md:4xl font-semibold text-white pb-3 text-center">
                  Viviendas entregadas en el mundo
                </h2>
                <p className="text-xl md:text-3xl font-bold text-center text-amber-400 pb-2">
                  Más de 18 mil viviendas
                </p>
              </div>
              <div className="col-span-3 md:col-span-1">
                <h2 className="text-2xl md:4xl font-semibold text-white pb-3 text-center">
                  Viviendas entregadas en España
                </h2>
                <Counter end={17610} />
              </div>
              <div className="col-span-3 md:col-span-1">
                <h2 className="text-2xl md:4xl font-semibold text-white pb-3 text-center">
                  Viviendas entregadas en Colombia
                </h2>
                <Counter end={866} />
              </div>
            </div>
          </div>
          {/* 
                    <div className='flex justify-center items-center col-span-1 md:col-span-2'>
                        <div className=' bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 rounded-t-full rounded-b-[73rem] h-[400px] md:h-[800px] object-cover'>
                            <img src={Referencia} loading="lazy" className='p-5 rounded-t-full rounded-b-[73rem] h-full object-cover'></img>
                        </div>
                    </div>
                    */}
        </div>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 bg-white rounded-t-md bor py-12">
          <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
            <a href="https://impulsaproyectos.com/" target="_blank">
              <img
                src={LogoImpulsaProyectosInmobiliarios}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="Logo Impulsa Proyectos Inmobiliarios"
                width=""
                height=""
              />
            </a>
          </div>
          <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
            <a href="https://www.alianza.com.co/" target="_blank">
              <img
                src={LogoAlianza}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="Logo Alianza Fiduciaria"
                width=""
                height=""
              />
            </a>
          </div>
          <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
            <a href="https://www.bancodebogota.com/" target="_blank">
              <img
                src={LogoBancodeBogota}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="Logo Banco de Bogotá"
                width=""
                height=""
              />
            </a>
          </div>
          <div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
            <a href="https://www.scotiabank.com/" target="_blank">
              <img
                src={LogoScotiabank}
                className="h-12 w-auto m-auto"
                loading="lazy"
                alt="Logo Scotiabak Colpatria"
                width=""
                height=""
              />
            </a>
          </div>
          {/*<div className="col-span-5 lg:col-span-1 p-4 grayscale transition duration-200 hover:grayscale-0">
            <a
              href="https://www.credicorpcapital.com/Colombia/Paginas/NHome.aspx"
              target="_blank"
            >
              <img
                src={LogoCredicorp}
                className="h-12 w-60 lg:w-auto mx-auto"
                loading="lazy"
                alt="Logo Credicorp Fiduciaria"
                width=""
                height=""
              />
            </a>
          </div>*/}
        </div>
      </div>
      <div className="pt-28 pb-12 bg-white">
        <div id="projects" className="max-w-7xl mx-auto px-4 xl:px-6">
          <div className="flex flex-col">
            <p className=" text-xl md:text-2xl font-bold text-amber-600">
              Nuestros{" "}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
              Proyectos
            </h1>
          </div>
          <CarouselProjects />
        </div>
        <div id="blog" className="max-w-7xl mx-auto px-4 xl:px-6 py-12">
          <p className=" text-xl md:text-2xl font-bold text-amber-600">
            Sala de{" "}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
            Prensa
          </h1>
          <BlogSection />
        </div>
        <div id="contact" className="max-w-7xl mx-auto px-4 xl:px-6">
          <p className=" text-xl md:text-2xl font-bold text-amber-600">
            Hablemos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
            Es fácil contactarnos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactForm />
            <Ubication
              nameUbication={oficinaPrincipal.nameUbication}
              linkDirection={oficinaPrincipal.linkDirection}
              direction={oficinaPrincipal.direction}
              city={oficinaPrincipal.city}
              refPhone={oficinaPrincipal.refPhone}
              phone={oficinaPrincipal.phone}
              textWhatsapp={oficinaPrincipal.textWhatsapp}
              refWhatsApp={oficinaPrincipal.refWhatsApp}
              whatsapp={oficinaPrincipal.whatsapp}
              refEmail={oficinaPrincipal.refEmail}
              textEmail={oficinaPrincipal.textEmail}
              email={oficinaPrincipal.email}
              iconWaze={oficinaPrincipal.imageWaze}
              wazeLink={oficinaPrincipal.refWaze}
              textWaze={oficinaPrincipal.textWaze}
              iconMaps={oficinaPrincipal.imageMaps}
              mapsLink={oficinaPrincipal.refMaps}
              textMaps={oficinaPrincipal.textMaps}
              iframe={oficinaPrincipal.iframe}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
