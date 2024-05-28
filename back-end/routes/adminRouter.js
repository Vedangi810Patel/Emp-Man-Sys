const adminController = require("../controllers/adminController");
const express =  require('express');
const midAuth = require("../middleware/midAuth");
const categoryController  = require("../controllers/categoryController");
const route = express.Router();

route.post('/adminlogin', adminController.logIn);

route.post('/addCategory', midAuth, categoryController.addCatrgory);

route.get('/allCategory', midAuth, categoryController.allCategory);

route.post('/categoryById',  midAuth, categoryController.categoeyById);

module.exports = {
    route
}