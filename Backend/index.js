const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { recipeRouter } = require("./router/Recipe.Router");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Recipe Application!!");
});

app.use("/recipe",recipeRouter)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DataBase!!!");
  } catch (err) {
    console.log("Data connection Failed");
  }
  console.log("Port is Running on port", process.env.port);
});
