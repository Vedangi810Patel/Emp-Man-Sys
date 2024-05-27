const adminController = require("../controllers/adminController");
const express =  require('express');
const midAuth = require("../middleware/midAuth");
const categoryController  = require("../controllers/categoryController");
const route = express.Router();

route.post('/adminlogin', adminController.logIn);

route.post('/addCategory', categoryController.addCatrgory);

module.exports = {
    route
}