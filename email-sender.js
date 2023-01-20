var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*********@gmail.com',
    pass: '*************'
  }
});

var mailOptions = {
  from: '*********@gmail.com',
  to: '*********@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HI!'
};

transporter.sendMail(mailOptions, function(err, data){
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + data.response);
  }
});