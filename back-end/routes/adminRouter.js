const adminController = require("../controllers/adminController");
const express =  require('express');
const route = express.Router();

route.post('/adminlogin', adminController.logIn);

module.exports = {
    route
}