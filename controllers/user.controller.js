const User = require('../models/User')

module.exports.usersController = {
    createUser:async(req,res) => {
        try {
            const { name, email, login, password, admin } = req.body;
            const createUser = await User.create({
                name,
                email,
                login,
                password,
                admin
            })
            res.json(createUser)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    deleteUser: async (req,res) => {
        try {
            const deleteUser = await User.findByIdAndRemove(req.params.id)
            res.json(deleteUser)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    getUsers:async(req,res) => {
        try {
            const getUsers = await User.find()
            res.json(getUsers)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    },
    getOneUser:async(req,res)=> {
        try {
            const data = await User.findById(req.params.id)
            res.json(data)
        } catch (error) {
            return res.status(404).json(error.toString());
        }
    }
}