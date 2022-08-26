require('dotenv').config();
const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.passw
    }
 });
const mailOptions = {
    from: 'jithingeorge650@gmail.com', // Sender address
    to: 'georgejithi@gmail.com', // List of recipients
    subject: 'Send by nodemailer', // Subject line
    text: 'This is sample mail.', // Plain text body
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
   } else {
     console.log(info);
   }
});