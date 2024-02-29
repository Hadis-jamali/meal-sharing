const express = require("express");
const router = express.Router();
const knex = require("../database");
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//all meal
router.get("/", async (req, res) => {
  try {
    const meals = await knex.select("*").from("meals");
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//post add new meal
router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    await knex("meals").insert(newMeal);
    res.status(201).json({ message: "Meal added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//get return meal by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getMeal = await knex.select("*").from("meals").where("id", id).first();
    if (getMeal) {
      res.json(getMeal);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//Put update by id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateMeal = req.body;
    const update = await knex("meals").where("id", id).update(updateMeal);
    if (update) {
      res.json({ message: "update meal" });
    } else {
      res.status(404).json({ message: "meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMeal = await knex("meals").where("id", id).del();
    if (deleteMeal) {
      res.json({ message: "Meal deleted successfully" });
    } else {
      res.status(404).json({ message: "meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
