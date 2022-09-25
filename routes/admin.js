const express = require('express');

const routes = express.Router();

const admincontroller = require('../controllers/AdminController');

routes.get('/',admincontroller.index);
routes.post('/insertData',admincontroller.addData);
routes.get('/viewdata',admincontroller.viewData);
routes.get('/deleteData/:id',admincontroller.deletedata);
routes.get('/editData/:id',admincontroller.editdata);
routes.post('/updateData',admincontroller.updateData);

module.exports = routes;