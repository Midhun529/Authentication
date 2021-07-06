const mongoose=require('mongoose');
const express=require('express');
const urlencoded=require('body-parser');
const loginroute=require('./routes/loginrouter')
const app= express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const url ="";

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    result=>
    app.listen(3000,()=>console.log('http://localhost:3000/'))
).catch(err=>console.log(err));
app.use(loginroute);
