const express= require('express');
const app=express();
app.set("view engine","ejs")
app.get("/Profile/:name",function(req,res)
{
  console.log(req.params.name);
  res.render('Profile',{name:req.params.name})
})
app.listen(5000);