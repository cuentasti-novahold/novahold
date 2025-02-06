import React from 'react'
import Image from 'next/image'

export default function Purpose() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center w-full p-12 '>
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <Image
                        className="object-cover"
                        width={200}
                        height={200}
                        src="/img/purpose-vision/purpose.svg"
                        alt="banner"
                    />
                    <h1 className='text-center text-3xl font-bold text-[#17af95]'>Nuestro Propósito</h1>
                </div>
                <div className='w-full p-2'>
                    <p className='text-base md:text-3xl text-justify text-[#00365f]'>
                        Buscamos contribuir al crecimiento de nuestros clientes, socios y filiales a través del desarrollo de productos y procesos estratégicos, innovadores y disruptivos, que aporten en el crecimiento, rentabilidad y sostenibilidad de estos.
                    </p>
                </div>
            </div>
        </>
    )
}
