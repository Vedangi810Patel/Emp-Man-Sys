const { QueryTypes } = require('sequelize')
const sequelize = require('../configs/db_config');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_key = "employee";

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Missing Required Fields !!" });
        }

        console.log("Email: " + email, "\nPassword: " + password);

        const existingAdmin = await sequelize.query(
            // console.log("Inside exisitng Admin")
            `SELECT a_email,a_password FROM admin WHERE a_email = :email`,
            {
                type: QueryTypes.SELECT,
                replacements: { email }
            }
        );


        // if (existingAdmin.length > 0) {
        //     return res.status(400).json({ error: "Admin Already Exists !!" });
        // }

        // await sequelize.query(
        //     `INSERT INTO admin (a_email, a_password) VALUES(:email, :password)`,
        //     {
        //         type: QueryTypes.INSERT,
        //         replacements: { email, password }
        //     }
        // );

        if(existingAdmin.length === 0) {
            return res.status(400).json({ error: "Email not found"});
        }

        if(email === existingAdmin[0].a_email && password === existingAdmin[0].a_password) {
            console.log("Admin Log In Successfully !!")
            return res.status(200).json({ message: "Admin Log In Successfully !!" }); 
        }
        else {
            return res.status(400).json({error : "Incorrect Credentials !!" });
        }

        // return res.status(200).json({ message: "Admin added successfully" });

    } catch (error) {

        console.log("Error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


const fetchAllAdmin = (req, res) => {



}


const fetchAdminById = (req, res) => {

}


const updateAdmin = (req, res) => {

}


const deleteAdmin = (req, res) => {

}


module.exports = {
    logIn,
    fetchAllAdmin,
    fetchAdminById,
    updateAdmin,
    deleteAdmin
}