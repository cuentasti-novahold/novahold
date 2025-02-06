import React from 'react'
import Image from 'next/image'

export default function Vision() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center w-full p-12 '>
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <Image
                        className="object-cover"
                        width={200}
                        height={200}
                        src="/img/purpose-vision/vision.svg"
                        alt="banner"
                    />
                    <h1 className='text-center text-3xl font-bold text-[#17af95]'>Visión</h1>
                </div>
                <div className='w-full p-2'>
                    <p className='text-base md:text-3xl text-justify text-[#00365f]'>
                        Ser un grupo de inversión orientado a la gente, desarrollando proyectos innovadores que transciendan y que impacten la calidad de vida de las personas, conectando con nuestros clientes con soluciones diferenciales a través del mejor talento humano, tecnología, crando relaciones duraderas y sostenibles.
                    </p>
                </div>
            </div>
        </>
    )
}
