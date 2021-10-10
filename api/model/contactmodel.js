const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth ={
   auth:{
       api_key: 'key-53b1c3e5a444a61ae33465bd58dd94f7',
       domain:'sandboxa78b7a20981e488780ac8c6e8f12073c.mailgun.org'
   }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail=(email,subject,text)=>{
    const mailOption ={
        from: email,
        to: 'zobaidulislamjabed@gmail.com',
        subject: subject,
        text: text
     };
     transporter.sendMail(mailOption,function(err,data){
        if(err){
            console.log('Error Occures!');
        }else{
            console.log(' Msg sent! from model');
        }
    });
}

module.exports = {sendMail};
