import "../../styles/home.css"
import React from 'react';
import Banner from "../../components/banner/Banner";
import Purpose from "../../components/purpose-vision/Purpose";
import Flags from "../../components/flags/Flags";
import Vision from "../../components/purpose-vision/Vision";
import Services from "../../components/services-novahold/Servicios";

export default function PrincipalPage() {
    return (
        <>
            {/* Banner */}
            <div>
                <Banner />
            </div>
            {/* Proposito */}
            <div>
                <Purpose />
            </div>
            {/* Banderas */}
            <div>
                <Flags />
            </div>
            {/* Vision */}
            <div>
                <Vision />
            </div>
            {/* Servicios */}
            <div>
                <Services />
            </div>
        </>
    )
}
