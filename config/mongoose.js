const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mvc");

const db = mongoose.connection;

db.on('err',console.error.bind(console,'DB not connected'));

db.once('open',(err)=>{
    if(err){
        console.log("DB not start");
        return false;
    }
    console.log("DB is start");
});


module.exports = db;