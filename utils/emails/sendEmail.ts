import nodemailer from 'nodemailer'

const sendEmail = (email:string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    })
    
    const mailOptions = {
        from: 'admin@dygav.es',
        to: email,
        subject: 'Bienvenido a Dygav',
        text: 'Aqui ira la plantilla HTML del email'
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

export default sendEmail