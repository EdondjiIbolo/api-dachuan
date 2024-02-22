import nodemailer from "nodemailer";
import fs from "fs";
import OTP from "otplib";
import "dotenv/config";
export async function sendVerifyCode(email) {
  //configurar la autenticacion para enviar los sms desde la cuenta origen
  const password = process.env.EMAIL_PASSWORD_ACOUNT;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: true,
      auth: {
        user: "enzombula@gmail.com",
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
        ca: [fs.readFileSync("./server.crt")],
      },
    });
    const { authenticator } = OTP;
    //Generar el token
    const secret = authenticator.generateSecret();
    // Generar un código OTP de 6 dígitos
    const otpCode = authenticator.generate(secret);

    //Agregar el token al sms

    let mailOptions = {
      from: "enzombula@gmail.com",
      to: `${email}`,
      subject: "Código de verificación",
      text: `Tu código de verificación es: ${otpCode}`,
    };
    //enviar el sms con el token
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
    console.log(otpCode);
    console.log(secret);
    //retornar el token para su posterior verificacion
    return { otpCode, secret };
  } catch (error) {
    console.log(error);
    return error;
  }
}
