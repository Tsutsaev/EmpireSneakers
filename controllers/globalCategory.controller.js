const GlobalCategory = require('../models/GlobalCategory')

module.exports.globalCategoriesController = {
    getOneGlobalCategory: async (req,res) => {
        try {
            const data = await GlobalCategory.findById(req.params.id).populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    getGlobalCategories: async (req,res) => {
        try {
            const data = await GlobalCategory.find().populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    deleteGlobalCategory: async (req,res) => {
        try {
            const data = await GlobalCategory.findByIdAndDelete(req.params.id);
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    createGlobalCategory: async (req,res) => {
        try {
            const GlobalCategory = await GlobalCategory.create({
                name:req.body.name,
                categories:req.body.categories
            })
            const data = GlobalCategory.populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    }
}