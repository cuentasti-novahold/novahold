import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {/* Footer blanco */}
                <div className='flex flex-col md:flex-row justify-center items-center w-full py-8'>

                    {/* Izquierdo */}
                    <div className='flex flex-col justify-center items-center w-full gap-4 md:gap-8 p-3 md:p-10'>
                        <a href="../docs/aviso-de-privacidad.pdf" target="_blank" className='font-bold md:w-1/2'>
                            Aviso de privacidad
                        </a>


                        <a href="../docs/terminos-y-condiciones.pdf" target="_blank" className='font-bold md:w-1/2'>
                            Términos y condiciones
                        </a>
                        {/* <p className='font-bold md:w-1/2'>Sedes</p> */}
                    </div>

                    {/* Derecho */}
                    <div className='flex flex-col w-full gap-4 md:gap-8 p-2'>

                        <div className='flex flex-col gap-3 items-center'>
                            <p className='font-bold md:w-1/2'>Contactanos</p>
                            <p className='md:w-1/2'>Email: contacto@novahold.com</p>
                            {/* <p className='md:w-1/2'>Teléfono</p> */}
                        </div>

                        <div className='flex flex-col items-center gap-2'>

                            <div className='md:w-1/2'>
                                <p className='font-bold text-lg'>
                                    Síguenos en Linkedin
                                </p>
                            </div>

                            <div className='md:w-1/2'>
                                <Link href="https://www.linkedin.com/company/novahold-enterprises/" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image
                                            className=""
                                            width={40}
                                            height={100}
                                            src="/img/principal-page/linkedin.png"
                                            alt="Logo novahold Footer"
                                        />
                                    </a>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
                {/* Footer azul */}
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-0 p-10 w-full bg-[#00365f]'>
                    <Image
                        className="object-cover"
                        width={200}
                        height={200}
                        src="/img/principal-page/logo-noahold-blanco.png"
                        alt="Logo novahold Footer"
                    />
                    <p className='text-white md:text-2xl'>
                        © {new Date().getFullYear()} Hecho por Novahold
                    </p>
                </div>
            </div>
        </>
    )
}
