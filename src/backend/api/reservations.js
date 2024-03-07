const express = require("express");
const knex = require("../database");

const router = express.Router();

// get all reservation
router.get("/", async (req, res) => {
  try {
    const reservation = await knex.select("*").from("reservation");
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
});

//post add new reservation
router.post("/", async (req, res) => {
  try {
    const newReservation = req.body;
    const reservation = await knex("reservation").insert(newReservation);
    if (reservation) {
      res.status(201).json({ data: reservation, Message: "ok" });
    }
  } catch (error) {
    res.status(500).json({ error: "Not Found" });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await knex.select("*").from("reservation").where("id", id).first();
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//put update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateReservation = req.body;
    const update = await knex("reservation").where("id", id).update(updateReservation);
    if (update) {
      res.status(201).json({ data: update, message: "update successfully" });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await knex("reservation").where("id", id).del();
    if (result) {
      res.json({ message: "delete successfully" });
    } else {
      res.status(404).json({ message: " Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
