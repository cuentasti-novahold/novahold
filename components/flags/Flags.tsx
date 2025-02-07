import React from 'react'
import Image from 'next/image'

const flagsImages = [
    {
        country: "Colombia",
        url: "/img/flags/colombia.png",
    },
    {
        country: "Panama",
        url: "/img/flags/panama.png",
    },
    // {
    //     country: "Estados unidos",
    //     url: "/img/flags/eeuu.png",
    // },
    {
        country: "Mexico",
        url: "/img/flags/mexico.png",
    },
    // {
    //     country: "Salvador",
    //     url: "/img/flags/salvador.png",
    // }
]

export default function Flags() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-6  py-6 bg-[#00365f]'>
                <h1 className='text-center text-4xl text-white font-bold'>Tenemos presencia en</h1>
                <div className="flex justify-center items-center w-full py-3">
                    <div className="w-full flex flex-col md:flex-row justify-center overflow-x-hidden">
                        {flagsImages.map((flag, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center flex-shrink-0 mx-4"
                            >
                                <Image
                                    src={flag.url}
                                    alt={`Bandera de ${flag.country}`}
                                    width={200}
                                    height={150}
                                    className="object-contain rounded-2xl shadow-xl mb-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
