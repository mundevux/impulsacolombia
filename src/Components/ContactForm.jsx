import React, { useState } from 'react';
import Iframe from 'react-iframe';

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [project, setProject] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${tel}`);
        console.log(`Project: ${project}`);
        
    };

  return (
    <div className="container mx-auto py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className=" bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 flex flex-col justify-center " onSubmit={handleSubmit}>
                <p className=' text-lg md:text-xl font-bold text-amber-600'>Hablemos</p>
                <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Es fácil contactarnos</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block  text-shark-900 font-medium mb-2">Nombre completo</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-shark-50 rounded-md py-2 px-3 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block  text-shark-900 font-medium mb-2">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-shark-50 rounded-md py-2 px-3 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="tel" className="block  text-shark-900 font-medium mb-2">Número Telefónico</label>
                    <input type="tel" id="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="bg-shark-50 rounded-md py-2 px-3 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="project" className="block  text-shark-900 font-medium mb-2">Proyecto de interés</label>
                    <select id="project" name="project" value={project} onChange={(e) => setProject(e.target.value)} className="bg-shark-50 rounded-md py-2 px-3 w-full">
                        <option>Selecciona una opción</option>
                        <option>Cerasus Danubio</option>
                        <option>Avium Tunja</option>
                        <option>Cerasus Monteblanco</option>
                        <option>Avium Madrid</option>
                        <option>Cerasus Usme</option>
                        <option>Prunus Sexta Entrada</option>
                        <option>Cerasus Sexta Entrada</option>
                    </select>

                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-amber-400 hover:bg-amber-500 transition text-white text-base font-bold rounded-lg p-2">Enviar mensaje</button>
                </div>
            </form>
            <div className=" bg-shark-900 shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                <div className="">
                    <h2 className=" text-amber-400 text-3xl font-bold mb-2">Dirección</h2>
                    <a href="https://goo.gl/maps/A4KfcVYH7sY6ZP9V7" className='text-shark-50 text-lg md:text-xl font-normal' target='_blank'>Calle 98 8 37</a>
                    <p className='text-shark-300 text-base font-normal pb-2'>Bogotá, Colombia</p>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.520035040723!2d-74.04282688469262!3d4.6792860431444305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9a695d790d%3A0x8c9bce1c3ed5d124!2sCl.%2098%20%238-37%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1680211723679!5m2!1ses!2sco"
                        className='w-full h-96 rounded-md'
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>    
        </div>    
    </div>
  );
};

