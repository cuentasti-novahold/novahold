'use client';

import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Image from 'next/image';
import AOS from "aos";
import { IFormInput } from "@/../src/form/types/validation-forms";
import { handleForm } from '@/form/contact-action';

export default function Contact() {

    const [modal, setModal] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        
        // Convierte los datos a FormData
        const formData = new FormData();
        formData.append("name_user", data.name_user);
        formData.append("phone_user", data.phone_user);
        formData.append("email_user", data.email_user);
        formData.append("motivo", data.motivo);
        formData.append("message", data.mensaje);

        const result = await handleForm(formData);

        if (result.success) {
            setFormSuccess(true);
          } else {
            setFormSuccess(false);
          }

        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
        window.location.reload();// Recargar la página
    };

    useEffect(() => {
        AOS.init({
            duration: 500, // Duración de la animación en milisegundos
        });
    }, []);

    return (
        <>
            <div id="form-contact" className='flex flex-col md:flex-row justify-center items-center w-full h-full mt-20 '>
                <div className='flex flex-col justify-center items-center w-full'>
                    <h1 className='text-2xl text-[#00365f]'>Contáctanos</h1>
                    <form onSubmit={handleSubmit(onSubmit)} method='POST' className="max-w-lg p-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...register("name_user", { required: "El nombre es obligatorio" })}
                                id="name"
                                placeholder=" "
                                className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 ${errors.name_user ? 'border-red-500' : 'border-[#00365f]'} appearance-none focus:border-blue-500 focus:ring-0 focus:outline-none peer`}
                            />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-md text-[#00365f] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre completo</label>
                            {errors.name_user && <p className="text-red-500 text-sm mt-1">{errors.name_user.message}</p>}
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="tel"
                                    {...register("phone_user", { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]{10}$/, message: "Debe ser un número de 10 dígitos" } })}
                                    id="phone_user"
                                    placeholder=" "
                                    className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 ${errors.phone_user ? 'border-red-500' : 'border-[#00365f]'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                />
                                <label htmlFor="phone_user" className="peer-focus:font-medium absolute text-md text-[#00365f] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Télefono</label>
                                {errors.phone_user && <p className="text-red-500 text-sm mt-1">{errors.phone_user.message}</p>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    {...register("email_user", { required: "El correo es obligatorio", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Debe ser un correo válido" } })}
                                    id="email_user"
                                    placeholder=" "
                                    className={`block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 ${errors.email_user ? 'border-red-500' : 'border-[#00365f]'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                />
                                <label htmlFor="email_user" className="peer-focus:font-medium absolute text-md text-[#00365f] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo</label>
                                {errors.email_user && <p className="text-red-500 text-sm mt-1">{errors.email_user.message}</p>}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <div className="mb-4">
                                    <label className="block text-[#00365f] font-bold mb-2" htmlFor="motivo">
                                        Motivo de contacto
                                    </label>
                                    <select
                                        {...register("motivo", { required: "Debe seleccionar un motivo" })}
                                        className={`bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-[#00365f] leading-tight focus:outline-none focus:shadow-outline ${errors.motivo ? 'border-red-500' : 'border-[#00365f]'}`}
                                    >
                                        <option value="">Seleccione un motivo</option>
                                        <option value="1">Inteligencia de Negocios</option>
                                        <option value="2">Análisis financiero y comercial</option>
                                        <option value="3">Tecnología</option>
                                        <option value="4">Planeación financiera</option>
                                        <option value="5">Marketing y estrategia digital</option>
                                        <option value="6">Centro de servicio</option>
                                        <option value="7">Transformación del talento humano</option>
                                        <option value="8">Gestión de adquisición del talento</option>
                                        <option value="9">Estrategia organizacional</option>
                                        <option value="10">Otro</option>
                                    </select> 
                                    {errors.motivo && <p className="text-red-500 text-sm mt-1">{errors.motivo.message}</p>}                              
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="message" className="block mb-2 text-md font-medium text-[#00365f]">Detalles del motivo</label>
                                <textarea {...register("mensaje", { required: false })} id="message" placeholder="Detalles..."
                                    className="block p-2.5 w-full text-md text-[#00365f] bg-transparent rounded-lg border border-[#00365f] focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit" className="text-white font-bold bg-[#00365f] hover:bg-[#17af95] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md w-64 sm:w-auto px-10 py-2.5 text-center">Enviar</button>
                    </form>
                </div>
                <div className='flex justify-center w-full border-l'>
                    <Image
                        className="object-cover p-5 md:p-0"
                        width={200}
                        height={200}
                        src="/img/logo_novahold.png"
                        alt="vision"
                    />
                </div>
            </div>

            {modal && (
                <div
                    className="fixed inset-0 flex justify-center items-center bg-[#6B6B6B]/50 z-50"
                    data-aos="zoom-in"
                >
                    <div className="flex flex-col justify-center items-center w-[30rem] h-[15rem] text-center rounded-xl gap-6 bg-[#FFFFFF]/90">
                        {formSuccess ? (
                            <div className="flex flex-col justify-center items-center text-3xl font-semibold gap-4">
                                <Image
                                    width={50}
                                    height={100}
                                    src={"/img/contact/cheque.png"}
                                    alt="cerrar"
                                />
                                <h2>Mensaje enviado</h2>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center text-3xl font-semibold gap-4">
                                <Image
                                    width={50}
                                    height={100}
                                    src={"/img/contact/cerrar.png"}
                                    alt="cerrar"
                                />
                                <h1>El mensaje no pudo ser enviado</h1>
                            </div>
                        )}
                        <button className="text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white bg-[#00365f] hover:bg-[#17af95]" onClick={handleCloseModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
