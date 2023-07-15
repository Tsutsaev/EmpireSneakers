const User = require('../models/User')

module.exports.usersController = {
    addUser:async(req,res) => {
        try {
            const { name, email, login, password, admin } = req.body;
            const addUser = await User.create({
                name,
                email,
                login,
                password,
                admin
            })
            res.json(addUser)
        } catch (error) {
            res.status(401).json(error.message);
        }
    },
    deleteUser: async (req,res) => {
        try {
            const deleteUser = await User.findByIdAndRemove(req.params.id)
            res.json(deleteUser)
        } catch (error) {
            res.json(error.message);
        }
    },
    getUsers:async(req,res) => {
        try {
            const getUsers = await User.find()
            res.json(getUsers)
        } catch (error) {
            res.json(error.message);
        }
    }
}