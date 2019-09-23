var nodeMailer = require('nodemailer');

var remetente = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    service: '',
    port: 465,
    secure: true,
    auth:{
        user: 'lucas.lr184@gmail.com',
        pass: 'skateordie2006'}
});

var emailSend={
    from: 'juliano.marcondes.sjc@hotmail.com',
    to:'lucas.lr184@gmail.com',
    subject: 'testando nodemailer (mais um)',
    text: 'Pode ignorar, só estou testando',
};

remetente.sendMail(emailSend, function (error){
        if (error){
            console.log(error);
        } else{
            console.log('Email enviado!');
        }    
    });