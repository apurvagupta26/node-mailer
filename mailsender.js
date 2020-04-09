var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user:'apurvagt1@gmail.com',
        pass:'fesmtgnzhuvgzype'
    }
})

var mailOptions={
    from:'apurvagt1@gmail.com',
    to:'apurvagt1@gmail.com',
    subject:'testmail',
    text:'nodemailer testing!!!!'
}

transport.sendMail(mailOptions,function(error,info){
if(error){
    console.log('error------------------'+error)
}else{
    console.log('email sent'+info.response);
}
})