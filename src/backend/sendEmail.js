const nodemailer = require('nodemailer');

async function sendEmail() {
    try {
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const mailOptions = {
            from: 'sender@example.com',
            to: 'recipient@example.com',
            subject: 'Test Email',
            text: 'This is a test email without using passwords!',
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendEmail();
