module.exports=function(req,res,next)
{
  req.originalUrl = req.url;
  console.log("current route is",req.originalUrl)
  next();
}
