import nodemailer from 'nodemailer';
import { EMAIL_CONFIG, RECIPIENT_EMAIL } from './constants.js'; // Use import for constants

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_CONFIG.user,
        pass: EMAIL_CONFIG.pass,
    },
});

export const sendEmail = (email, subject, message) => {
    const mailOptions = {
        from: email,
        to: RECIPIENT_EMAIL,
        subject: subject, 
        html: `
            <p><strong>Email:</strong> ${email}</p>
            <p>${message}</p>
        `, 
        replyTo: email,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            }
            resolve(info);
        });
    });
};
