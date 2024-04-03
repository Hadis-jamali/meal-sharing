const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  const { maxPrice, availableReservations, title, dateAfter, sortKey, sortDir, dateBefore, limit } =
    req.query;
  const response = {
    data: await knex("meals").select("*") ,
    status: 200,
    message: "ok",
  };

  try {
    if (maxPrice && !isNaN(maxPrice)) {
      const result = await knex("meals").select("*").where("price", "<", +maxPrice);
      response.data = result;
    }

    if (["meal_time", "max_reservation", "price"].includes(sortKey)) {
      const result = await knex("meals")
        .select("*")
        .orderBy(sortKey, sortDir === "desc" ? "desc" : "asc");
      response.data = result;
    }

    if (title) {
      const result = await knex("meals").select("*").where("title", "like", `%${title}%`);
      response.data = result;
    }

    if (availableReservations !== undefined) {
      const isAvailable = availableReservations.toLowerCase() === "true";

      if (isAvailable) {
        const result = await knex("meals")
          .countDistinct("reservation.id as total_reservations")
          .leftJoin("reservation", "meals.id", "=", "reservation.meal_id")
          .groupBy("meals.id", "meals.title", "meals.max_reservation")
          .select("meals.title", "meals.max_reservation")
          .having(function () {
            this.sum("total_reservations", ">", "meals.max_reservation");
          });
        response.data = result;
      } else {
        const result = await knex("meals")
          .countDistinct("reservation.id as total_reservations")
          .leftJoin("reservation", "meals.id", "=", "reservation.meal_id")
          .groupBy("meals.id", "meals.title", "meals.max_reservation")
          .select("meals.title", "meals.max_reservation")
          .having(function () {
            this.sum("total_reservations", "<=", "meals.max_reservation");
          });
        response.data = result;
      }
    }

    if (dateAfter) {
      const result = await knex
        .select("*")
        .from("meals")
        .where("meal_time", ">", new Date(dateAfter));
      response.data = result;
    }

    if (dateBefore) {
      const result = await knex("meals").select("*").where("meal_time", "<", dateBefore);
      response.data = result;
    }

    if (limit && !isNaN(limit)) {
      const result = await knex("meals").select("*").limit(parseInt(limit));
      response.data = result;
    }

    res.status(response.status).json({ data: response.data, message: response.message });
  } catch (error) {
    console.error("Server Error", error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
