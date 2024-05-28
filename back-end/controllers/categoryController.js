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

        console.log("Error : ", err)
        return response.status(500).json("Internal Server Error !");

    }
}

const allCategory = async (req, res) => {
    try {

        const category = await sequelize.query(`select * from category`);

        if (category.length === 0) {
            return res.status(400).json({ error: "No Category Found !" });
        }

        return res.status(200).json(category);

    } catch {

    }
}

const categoeyById = async (req, res) => {

    try {

        const { id } = req.body;

        if (!id) {
            return res.status(400).json("Missing Required Field");
        }

        const existingCategory = await sequelize.query(`SELECT * from category where cat_id = :id`,
            {
                type: QueryTypes.SELECT,
                replacements: { id }
            }
        )

        if(existingCategory.length === 0) {
            return res.status(400).json({error : "Category Not Found !"})
        }

        return res.status(200).json(existingCategory);

    } catch (error) {
        console.log("Error occurred : ", error)
        return res.status(500).json({ error: "Inernal Server Error !" })
    }

}

module.exports = {
    addCatrgory,
    allCategory,
    categoeyById
}
