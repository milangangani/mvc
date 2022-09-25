const express = require('express');


const routes = express.Router();
console.log("index routing is working");
routes.use('/admin',require('./admin'));


module.exports = routes;