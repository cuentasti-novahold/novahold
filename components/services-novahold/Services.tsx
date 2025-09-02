"use client";

import { useState } from 'react';
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../styles/services.css";

/* Arreglo con los datos de los servicios de los lados frente y reverso */
const services = [
    {
        id: 1,
        title: "Inteligencia de negocios",
        image: "/img/servicios/inteligencia-negocios.svg",
        description: "• Optimización de procesos repetitivos y manuales.\n• Integración de diversas fuentes de información.\n• Modelado de datos para análisis y toma de decisiones."
    },
    {
        id: 2,
        title: "Análisis financiero y comercial",
        image: "/img/servicios/analisis-financiero.svg",
        description: "• Diseño de estrategias financieras y comerciales.\n• Diagnostico de indicadores financieros y comerciales.\n• Acompañamiento en la ejecución y seguimiento de resultados."
    },
    {
        id: 3,
        title: "Tecnología",
        image: "/img/servicios/tecnologia.svg",
        description: "• Desarrollo Software.\n• Implementación páginas web.\n• Administración tecnológica."
    },
    {
        id: 4,
        title: "Planeación financiera",
        image: "/img/servicios/planeacion-financiera.svg",
        description: "• Proyección de escenarios financieros para toma de decisiones.\n• Elaboración y seguimiento de presupuesto e indicadores.\n• Identificación de riesgos y oportunidades de mejora en la gestión."
    },
    {
        id: 5,
        title: "Marketing y estrategia digital",
        image: "/img/servicios/marketing.svg",
        description: "• Desarrollo de marca.\n• Marketing digital.\n• Comunicación organizacional."
    },
    {
        id: 6,
        title: "Centro de servicio",
        image: "/img/servicios/centro-servicios.svg",
        description: "•Atención al cliente.\n•Gestión de cobranza.\n•Confirmación y prevención del fraude."
    },
    {
        id: 7,
        title: "Transformación Talento Humano",
        image: "/img/servicios/transformacion.svg",
        description: "• Formación y desarrollo.\n• Coaching (personal, profesional, equipos)."
    },
    {
        id: 8,
        title: "Gestión de adquisición del talento",
        image: "/img/servicios/gestion.svg",
        description: "• Revisión y definición de perfiles de cargo.\n• Búsqueda de perfil y preselección.\n• Entrevista y evaluación de candidatos."
    },
    {
        id: 9,
        title: "Estrategia organizacional",
        image: "/img/servicios/estrategia.svg",
        description: "• Diagnóstico y análisis integral Organizacional.\n• Definición de objetivos y metas estratégicas.\n• Diseño de plan de acción y mecanismos de seguimiento."
    }
]


export default function Services() {
    /* Estado para controlar las tarjetas que estan volteadas */
    const [flipCards, setFlipCards] = useState<{ [key: number]: boolean }>({});
    /* Funcion paaaavoltear una tarjeta especifica */
    const handleCardFlip = (cardId: number) => {
        setFlipCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }

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
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className="flex flex-col justify-center items-center p-5 rounded-2xl">
                            <ReactCardFlip isFlipped={flipCards[service.id] || false} flipDirection="horizontal">
                                {/* Frente de la tarjeta */}
                                <div className="flex flex-col justify-center items-center gap-2 w-[260px] h-[260px]" onClick={() => handleCardFlip(service.id)}>
                                    <Image
                                        width={200}
                                        height={200}
                                        src={service.image}
                                        alt={service.title}
                                    />
                                    <h1 className='md:text-xl font-semibold'>{service.title}</h1>
                                </div>
                                {/* Reverso de la tarjeta */}
                                <div className="flex flex-col justify-between items-center w-[260px] h-[260px] p-4" onClick={() => handleCardFlip(service.id)}>
                                    {/* Contenido principal centrado */}
                                    <div></div> {/* Espaciador superior */}
                                    
                                    <div className='text-center'>
                                        <h2 className="font-semibold mb-3">{service.title}</h2>
                                        <div className="space-y-1">
                                            {service.description.split('\n').map((paragraph, index) => (
                                                <p className='text-sm' key={index}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <p className='text-xs text-gray-400'>Click para regresar</p>
                                </div>
                            </ReactCardFlip>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
