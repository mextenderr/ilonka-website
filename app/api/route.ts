import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ilonka.web.contact@gmail.com",
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "ilonka.web.contact@gmail.com",
        to: "max.van.oord@gmail.com",
        subject: "Bericht vanuit contact formulier website",
        text: `Naam: ${body.name}\nEmail: ${body.email}\n\nOnderwerp: ${body.onderwerp}\n\nBericht:\n${body.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "Form submitted" });
    } catch (error) {
        console.log(error);
        return Response.error();
    }
}
