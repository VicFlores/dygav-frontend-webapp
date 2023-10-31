import nodemailer from 'nodemailer'
import touristTemplate from './templates/touristTemplate'


const sendEmail = (email: string, fullname:string, role:string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    })

    if (role === 'tourist') {
        const mailOptions = {
            from: 'admin@dygav.es',
            to: email,
            subject: '¡Bienvenid@ a la comunidad de viajeros de DYGAV!',
            html: touristTemplate(fullname)
        }

        console.log("EMAIL")
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }



   
}

export default sendEmail