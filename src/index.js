const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port: '1025',
  auth: null
});

transport.sendMail({
  from: 'ADTC2 Maranguape <sectc2maranguape@gmail.com>',
  to: 'Leonardo Anjos <leodrums11@gmail.com>',
  subject: 'Membro',
  html: '<div style="text-align: center"> <h1>ADTC II MARANGUAPE - CE</h1> <img src="https://avatars3.githubusercontent.com/u/14889591?s=460&v=4" alt="profile"> <div style="padding-top: 20px;"> <b>Nome:</b> Leonardo Anjos <br> <b>Função:</b> Músico - Baterista </div> </div>'
});