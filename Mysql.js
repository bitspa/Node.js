var mysql=require('mysql');
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"spandita"
});
con.connect(function(error)
{
  if(error) throw error;
  console.log("connect");
  con.query("select * from users",function(err,result){
  if (err) throw err;
  console.log("All results are these: ",result);
  console.log("all results are here",result[0].name)
  })
})  

// var mysql=require('mysql');
// var con=mysql.createConnection({
//   host:"localhost",
//   user:"test",
//   password:"123456",
//   database:"spandy"
// });
// con.connect(function(error)
// {
//   if(error) throw error;
//   console.log("connect");
//   con.query("select * from username",function(err,result){
//   if (err) throw err;
//   console.log("all results are here",result)
//   })
// })  