"use server"

import { sendEmail } from "@/lib/brevo"

export async function handleForm(formData: FormData) {

    const name = formData.get('name_user');
    const countryCode = formData.get('country_code');
    const phone = formData.get('phone_user');
    const email = formData.get('email_user');
    const motivo = formData.get('motivo');
    const message = formData.get('message');

    if (!name || !countryCode || !phone || !email || !motivo) {
        return {
            success: false,
            message: "Por favor, llene todos los campos",
        };
    };

    const motivoMap: Record<string, string> = {
        '1': 'Inteligencia de Negocios',
        '2': 'Análisis financiero y comercial',
        '3': 'Tecnología',
        '4': 'Planeación financiera',
        '5': 'Marketing y estrategia digital',
        '6': 'Centro de servicio',
        '7': 'Transformación del talento humano',
        '8': 'Gestión de adquisición del talento',
        '9': 'Estrategia organizacional',
        '10': 'Otro',
    };
    
    const motivo_contacto = motivoMap[motivo as string] || "Motivo desconocido";

    const response = await sendEmail({
        subject: motivo_contacto as string,
        htmlContent: [
            {
                name: name as string,
                countryCode: countryCode as string,
                phone: phone as string,
                email: email as string,
                motivo: motivo_contacto as string,
                message: message as string
            },
        ],
    });

    return response;
}