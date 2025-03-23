const express=require('express');
const db = require('./configs/databaseUrl');
const bodyParser = require('body-parser');
const app=express();
const port=8080;

app.use("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require("./routers"));

app.listen(port,(error)=>{
    if(!error){
        db();
        console.log("server start successfully!");
        console.log("http://localhost:"+port);
        
    }
})