const Category = require('../models/Category')

module.exports.categoriesController = {
    addCategory: async(req,res) => {
        try {
            const addCategory = await Category.create({
                name:req.body.name,
                photo:req.body.photo
            })
            res.json(addCategory)
        } catch (error) {
            res.status(401).json(error.message);
        }
    },
    
}