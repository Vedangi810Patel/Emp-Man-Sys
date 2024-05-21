const adminController = require("../controllers/adminController");
const express =  require('express');
const route = express.Router();

route.post('/adminlogin', adminController.addAdmin);

module.exports = {
    route
}