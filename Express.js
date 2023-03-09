const express=require('express');
const app=express();
const router=express.Router();
app.get("/",function(req,res)
{
  // res.send("Hello express new")
  res.sendFile(__dirname+"/Home.html")
})
const checkUrl= require('./Middleware')

app.get("/about",function(req,res)
{
  res.send("Hello this is about page")
})
router.get("/login",checkUrl,function(req,res)
{
  res.send("Hello this is login page")
})
router.get("/SignUp",checkUrl,function(req,res)
{
  res.sendFile(__dirname+"/SignUp.html")
})
app.post("/about",function(req,res)
{
  res.send("Hello this is about page post")
})
app.put("/about",function(req,res)
{
  res.send("Hello this is about page put")
})
app.delete("/about",function(req,res)
{
  res.send("Hello this is about page delete")
})
app.use("/",router);
app.listen(4500)
