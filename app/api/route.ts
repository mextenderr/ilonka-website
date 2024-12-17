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
        to: "ilonkadevos@gmail.com",
        subject: "Contact formulier",
        text: `Naam: ${body.name}\nEmail: ${body.email}\nTelefoonnumer: ${body.tel}\n\nOnderwerp: ${body.onderwerp}\n\nBericht:\n${body.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ message: "Form submitted" });
    } catch (error) {
        console.log(error);
        return Response.error();
    }
}
