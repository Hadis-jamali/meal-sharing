const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");
const knex = require("./database");

app.get("/", async (req, res) => {
  return app.json({ message: "hello" });
});

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

//Routes
router.use("/meals", mealsRouter);

//future_meals
app.get("/future_meals", async (req, res) => {
  try {
    const date = new Date();
    const future_meals = await knex("meal").where("when", ">", date).select();
    res.status(200).json({ data: future_meals, message: "all meals in the future" });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: null, message: "Internal Server Error" });
  }
});

//past-meals

app.get("/past_meals", async (req, res) => {
  try {
    const date = new Date();
    const past_meals = await knex("meal").where("when", "<", date).select();
    res.status(200).json({ data: past_meals, message: "all meals in the past" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: null, message: "Server Error" });
  }
});

//All meals
app.get("/all_meals", async (req, res) => {
  try {
    const all_meals = await knex("meal").orderBy("id");
    res.status(200).json({ data: all_meals, message: "All meals sorted by id" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: null, message: "Server Error" });
  }
});

//first-meal

app.get("/first_meal", async (req, res) => {
  try {
    const first_meal = await knex("meal").orderBy("id").first();

    if (first_meal) {
      res.status(200).json({ data: first_meal, message: "First meal minimum id " });
    } else {
      res.status(404).json({ data: null, message: "No meals found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: null, message: "Server Error" });
  }
});

//Last-meal

app.get("/last_meal", async (req, res) => {
  try {
    const last_meal = await knex("meal").orderBy("id", "desc").first();
    if (last_meal) {
      res.status(200).json({ data: last_meal, message: "Last meal maximum id (descending)" });
    } else {
      res.status(404).json({ data: null, message: "No meals found" });
    }
  } catch (error) {
    console.error(error);
    if (error.code === "ER_NO_DB_ERROR" || error.code === "ECONNREFUSED") {
      res.status(503).json({ data: null, message: "Database connection error" });
    }
    res.status(500).json({ data: null, message: "Server Error" });
  }
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  //res.json({ message: "hello" });
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
