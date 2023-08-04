require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use("/images", express.static("images"));

const basketRouter = require("./routes/basket.route");
const favoriteRouter = require("./routes/favorite.route");
const productRouter = require("./routes/product.route");
const usersRouter = require("./routes/users.route");
const categoriesRouter = require("./routes/categories.route");
const globalCategories = require("./routes/globalCategories.route");
const topicalRouter = require("./routes/topical.route");
const applicationsRouter = require('./routes/applications.route');
const commentsRouter = require('./routes/comments.route');


app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/globalCategories", globalCategories);
app.use("/basket", basketRouter);
app.use("/favorite", favoriteRouter);
app.use("/product", productRouter);

app.use("/topicalImage", topicalRouter);
app.use("/applications",applicationsRouter)
app.use("/comments", commentsRouter)


mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("mongoose warning"));

app.listen(process.env.PORT, () => {
  console.log("Server start on port: " + process.env.PORT);
});
