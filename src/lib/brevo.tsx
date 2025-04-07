import * as brevo from '@getbrevo/brevo';

const brevoInstance = new brevo.TransactionalEmailsApi(); //INstancia que permite enviar correos

brevoInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
);

interface Params {
    subject: string;
    htmlContent: {
        name: string,
        countryCode: string,
        phone: string,
        email: string,
        motivo: string,
        message: string
    }[];
}

const smtpEmail = new brevo.SendSmtpEmail();


export async function sendEmail({ subject, htmlContent }: Params) {


if (!subject || !htmlContent || htmlContent.length === 0) {
    console.error("Invalid parameters: subject or htmlContent is missing");
    return { success: false };
}
    //Quien recibe el correo
    smtpEmail.subject = "Solicitud de información: " + subject;
    smtpEmail.to = [{ email: 'contacto@novahold.com' }];
    const htmlBody = htmlContent
        .map((content) =>  `
            <p><strong>Nombre:</strong> ${content.name}</p>
            <p><strong>Código de país:</strong> ${content.countryCode}</p>
            <p><strong>Telefono:</strong> ${content.phone}</p>
            <p><strong>Contacto:</strong> ${content.email}</p>
            <p><strong>Mensaje:</strong> ${content.message}</p>
        `)
        .join("");
    smtpEmail.htmlContent = `<html><body>${htmlBody}</body></html>`;
    //Quien envia el correo
    smtpEmail.sender = { email: "contacto@novahold.com", name: "Novahold" };

    try {
        const response = await brevoInstance.sendTransacEmail(smtpEmail);
        console.log("Correo electrónico enviado exitosamente:", response);
        return { success: true };
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: "Se produjo un error desconocido" };
    }
}