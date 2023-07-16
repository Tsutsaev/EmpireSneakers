const GlobalCategories = require('../models/GlobalCategory.model')

module.exports.globalCategoriesController = {
    getOneGlobalCategories: async (req,res) => {
        try {
            const data = await GlobalCategories.findById(req.params.id).populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    getGlobalCategories: async (req,res) => {
        try {
            const data = await GlobalCategories.find().populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    deleteGlobalCategories: async (req,res) => {
        try {
            const data = await GlobalCategories.findByIdAndDelete(req.params.id);
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    createGlobalCategories: async (req,res) => {
        try {
            const GlobalCategories = await GlobalCategories.create({
                name:req.body.name,
                categories:req.body.categories
            })
            const data = GlobalCategories.populate('categories')
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    }
}