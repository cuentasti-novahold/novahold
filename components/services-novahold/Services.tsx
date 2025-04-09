"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../styles/services.css";

export default function Services() {
    return (
        <>
            <div id="services-section">
                <h1 className="text-center text-4xl font-bold mb-6 text-[#17af95]">Nuestros servicios</h1>
                <Swiper
                    className="text-center body-carrusel"
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide={4}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    {/* Bloque 1 */}
                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/inteligencia-negocios.svg"
                                alt="Inteligencia de negocios"
                            />
                            <h1 className='md:text-xl font-semibold'>Inteligencia de negocios</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/analisis-financiero.svg"
                                alt="Análisis financiero y comercial"
                            />
                            <h1 className='md:text-xl font-semibold'>Análisis financiero y comercial</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/tecnologia.svg"
                                alt="Tecnología"
                            />
                            <h1 className='md:text-xl font-semibold'>Tecnología</h1>
                        </div>
                    </SwiperSlide>
                    {/* Bloque 2 */}
                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/planeacion-financiera.svg"
                                alt="Planeación financiera"
                            />
                            <h1 className='md:text-xl font-semibold'>Planeación financiera</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/marketing.svg"
                                alt="Marketing y estrategia digital"
                            />
                            <h1 className='md:text-xl font-semibold'>Marketing y estrategia digital</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/centro-servicios.svg"
                                alt="Centro de servicio"
                            />
                            <h1 className='md:text-xl font-semibold'>Centro de servicio</h1>
                        </div>
                    </SwiperSlide>
                    {/* Bloque 3 */}
                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/transformacion.svg"
                                alt="Transformación digital"
                            />
                            <h1 className='md:text-xl font-semibold'>Transformación del talento humano</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/gestion.svg"
                                alt="Gestión de adquisición del talento"
                            />
                            <h1 className='md:text-xl font-semibold'>Gestión de adquisición del talento</h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex flex-col justify-center items-center p-5 rounded-2xl">
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                width={200}
                                height={200}
                                src="/img/servicios/estrategia.svg"
                                alt="Estrategia organizacional"
                            />
                            <h1 className='md:text-xl font-semibold'>Estrategia organizacional</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
