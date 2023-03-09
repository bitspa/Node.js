const express= require('express');
const app=express();
app.set("view engine","ejs")
app.get("/Profile/:name",function(req,res)
{
  data={email:"test@test.com",phoneNumber:8777361605,skills:['node js','php','java','react']}
  res.render('Profile',{name:req.params.name})
})
app.listen(5000);