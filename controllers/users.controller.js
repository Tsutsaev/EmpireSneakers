const User = require("../models/User.model");
const Favorite = require("../models/Favorite.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Basket = require("../models/Basket.model");

module.exports.usersController = {
  signUp: async (req, res) => {
    const { name, email, login, phone, password, admin } = req.body;
    try {
      const candidate = await User.findOne({ login: login });

      if (candidate) {
        return res
          .status(401)
          .json({ error: "Такой пользователь уже существует" });
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const favorite = new mongoose.Types.ObjectId();
      const basket = new mongoose.Types.ObjectId();

      const avatar = req.files && req.files[0] ? req.files[0].path : "";
      const user = await User.create({
        avatar: avatar,
        name,
        email,
        login,
        phone,
        password: hash,
        admin,
        favorite: favorite,
        basket: basket,
      });

      await Favorite.create({
        _id: favorite,
      });
      await Basket.create({
        _id: basket,
      });

      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  signIn: async (req, res) => {
    const { login, password } = req.body;
    try {
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json({ error: "Неверный логин или пароль" });
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({ error: "Неверный логин или пароль" });
      }

      const payload = {
        id: candidate._id,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      return res.json(token);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      await Basket.findByIdAndRemove(user.basket);
      await Favorite.findByIdAndRemove(user.favorite);

      await User.deleteOne({ _id: req.params.id });

      res.json(req.params.id);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  getOneUser: async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
  updateAvatar: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, {
        avatar: req.files[0].path,
      });
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
