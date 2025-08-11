import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from './env.js'

export const accEmail = 'kartikeyattri@gmail.com'

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: accEmail,
        pass: EMAIL_PASSWORD
    }
})
