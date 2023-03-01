// var http= require('http');
// http.createServer(function(req,res)
// {
//   res.write("Hello from node");
//   res.end();
// }).listen(3950)

// var http= require('http');
// var data=[
//   {Name:"Spandita",Age:30,Gender:"female"},
//   {Name:"Priya",Age:25,Gender:"female"},
//   {Name:"Puja",Age:30,Gender:"female"}
// ]
// http.createServer(function(req,res)
// {
//   res.writeHead(200,{'Content-Type':'application\json'})
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(3980)

// var http= require('http');
// var page=`
// <h1>Hello My name is Node</h1>
// <input type="text"/><br>
// <input type="text"/><br>
// <input type="text"/>
// `
// http.createServer(function(req,res)
// {
//   res.writeHead(200,{'Content-Type':'text/html'})
//   res.write(page);
//   res.end();
// }).listen(3901)

// var http= require('http');
// var uc=require('upper-case')
// http.createServer(function(req,res)
// {
//   res.write(uc.upperCase("Hello from node8"));
//   res.end();
// }).listen(3001)

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('File.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': "text/html" })
    res.write(data);
    return res.end();
  })
}).listen(4000) 