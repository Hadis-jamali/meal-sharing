const express = require("express");
const knex = require("../database");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const addNewReservation = req.body;
    const newReservation = await knex("reservation").insert(addNewReservation);

    res.status(201).json({ data: newReservation, message: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong");
  }
});

module.exports = router;
