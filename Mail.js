var nodeMailer=require('nodemailer')
var transport=nodeMailer.createTransport({
  host:"spanditabanerjee3@gmail.com",
  port:587,
  secure:false,
  requireTLS:true,
  auth:{
    user:"spanditabanerjee3@gmail.com",
    pass:"********"
  }
})
var mailOptions={
  from:"spanditabanerjee3@gmail.com",
  to:"abc@gmail.com",
  subject:"Sending mail from Local Server",
  text:"Please Avoid this mail..I am just trying"
}
transport.sendMail(mailOptions,function(error,info)
{
  if(error)
  {
    console.log("error");
  }
  else{
    console.log("email has been sent successfully",info.response)
  }
})