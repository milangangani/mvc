const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

const db = require('./config/mongoose');

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Server not start");
        return false;
    }
    console.log("Server is start on port :- "+port);
})