import contactTemplate from '@/utils/emails/templates/contactTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
 
    if (req.method === 'POST') {
        try {
        const { name, email, phone, description } = req.body;
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
            },
        });
    
        const mailOptionClient = {
            from: 'admin@dygav.es',
            to: email,
            subject: `Gracias por contactar con nosotros ${name}`,
            html: contactTemplate(name),
        }

        transporter.sendMail(mailOptionClient, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })

        const mailOptionAdmin = {
            from: email,
            to: 'info@dygav.es',
            subject: 'Nuevo formulario recibido',
            html: `<h1>¡Hola! has recibido informacion del formulario</h1>
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Telefono: ${phone}</p>
            <p>Caso: ${description}</p>
            `
        }

        transporter.sendMail(mailOptionAdmin, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })

        }catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
        }
    }
}