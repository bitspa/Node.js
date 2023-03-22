const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./Users');
mongoose.connect('mongodb+srv://Spandy:2cRIH2rmd6aHnTaB@cluster0.dz5dnoq.mongodb.net/Atlantic?retryWrites=true&w=majority',
{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("db connection done")
})
async function getItems(){

  const Items = await User.find({});
  return Items;
}
getItems().then(function(err){    
  if(err)
  {
    console.warn(err);
  }
  console.log('saved');
  mongoose.disconnect();   
});

//2cRIH2rmd6aHnTaB
//122.176.27.111/32