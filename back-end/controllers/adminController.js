const { QueryTypes } = require('sequelize')
const sequelize = require('../configs/db_config');

const addAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Missing Required Fields !!" });
        }

        console.log("Email: " + email, "\nPassword: " + password);

        const existingAdmin = await sequelize.query(
            `SELECT * FROM admin WHERE a_email = :email`,
            {
                type: QueryTypes.SELECT,
                replacements: { email }
            }
        );

        if (existingAdmin.length > 0) {
            return res.status(400).json({ error: "Admin Already Exists !!" });
        }

        // await sequelize.query(
        //     `INSERT INTO admin (a_email, a_password) VALUES(:email, :password)`,
        //     {
        //         type: QueryTypes.INSERT,
        //         replacements: { email, password }
        //     }
        // );

        return res.status(200).json({ message: "Admin added successfully" });

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
    addAdmin,
    fetchAllAdmin,
    fetchAdminById,
    updateAdmin,
    deleteAdmin
}