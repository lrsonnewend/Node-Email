var nodeMailer = require('nodemailer');

var remetente = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    service: '',
    port: 465,
    secure: true,
    auth:{
        user: '',
        pass: ''}
});

var emailSend={
    from: '',
    to:'m',
    subject: 'testando nodemailer',
    text: 'só estou testando',
};

remetente.sendMail(emailSend, function (error){
        if (error){
            console.log(error);
        } else{
            console.log('Email enviado!');
        }    
    });
