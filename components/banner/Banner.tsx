import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <Image
                    className="object-cover"
                    layout="fill"
                    src="/img/principal-page/banner.png"
                    alt="banner"
                />
                <div className="absolute flex flex-col justify-between inset-0 z-20">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-2 md:gap-0 m-10">
                        <Image
                            className="object-cover"
                            width={200}
                            height={200}
                            src="/img/principal-page/logo-banner.png"
                            alt="banner"
                        />
                        <div className='flex flex-col md:flex-row md:gap-5 text-white'>
                            <h1 className='text-2xl font-semibold'>Contacto</h1>
                            <a href="#servicios-section">
                                <h1 className='text-2xl font-semibold'>Servicios</h1>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 p-5 text-white'>
                        <h1 className='text-lg md:text-3xl font-semibold'>Ética</h1>
                        <h1 className='text-lg md:text-3xl font-semibold'>Pasión</h1>
                        <h1 className='text-lg md:text-3xl font-semibold'>Innovación</h1>
                        <h1 className='text-lg md:text-3xl font-semibold'>Confiabilidad</h1>
                        <h1 className='text-lg md:text-3xl font-semibold'>Trabajo en equipo</h1>
                    </div>
                </div>
            </div>
        </>
    )
}