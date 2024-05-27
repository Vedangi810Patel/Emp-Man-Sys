const { response } = require('express');
const { QueryTypes, Sequelize } = require('sequelize');
const sequelize = require('../configs/db_config');

const addCatrgory = async (req, res) => {

    try {
        const { category } = req.body;

        const existingCategory = await sequelize.query(`SELECT * from category WHERE category = :category`,
            {
                type: QueryTypes.SELECT,
                replacements: { category }
            }
        )


        if (existingCategory.length > 0) {
            return res.status(400).json({ error: "Category Already Exist" });
        }

        await sequelize.query(`INSERT INTO category ( category ) VALUES ( :category )`,
            {
                type: QueryTypes.INSERT,
                replacements: { category }
            }
        )

        return res.status(200).json("Category Added Successfully !");


    } catch (err) {

        console.log("Error : ",err)
        return response.status(500).json("Internal Server Error !");

    }
}

module.exports = {
    addCatrgory,
}
