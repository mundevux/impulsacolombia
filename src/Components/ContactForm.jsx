import React, { useState } from 'react';
import Iframe from 'react-iframe';
import Ubication from './Ubication';

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
    <div className="container mx-auto">
            <form className=" bg-white shadow-xl rounded-md px-8 pt-6 pb-8 flex flex-col justify-center " onSubmit={handleSubmit}>
                <p className=' text-xl md:text-3xl font-bold text-amber-500 mb-8'>Déjanos tus datos</p>
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
        </div>
  );
};

