import React from 'react';
import Image from 'next/image';


export default function Footer() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-[0.1rem]'>
                {/* Footer azul */}
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-0 p-8 w-full bg-[#00365f]'>
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



