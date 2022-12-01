var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: 'ojanapi.otp@gmail.com',
    pass: 'ojanotp266'
  }
})

function mail(text, token){
  var options = {
    from: '"Verifikasi OTP Miku Bot" <ojanganz>',
    to: text,
    subject: 'Verifikasi mikubot',
    html: `${token}`,
}

transporter.sendMail(options, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
})
}

module.exports = {
  mail
}