const express = require("express");
const knex = require("../database");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allReview = await knex("review").select();
    if (allReview) {
      res.status(200).json({ data: allReview, message: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something wrong");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id: reviewId } = req.params;
    const reviewOfMeal = await knex("review").where("id", "=", reviewId).select();
    if (reviewOfMeal) {
      res.status(200).json({ data: reviewOfMeal, message: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.post("/", async (req, res) => {
  try {
    const addNewReview = req.body;
    const newReview = await knex("review").insert(addNewReview);

    res.status(201).json({ data: newReview, message: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;
    const updateReview = req.body;
    const updateReviewById = await knex("review").where("id", "=", reviewId).update(updateReview);

    if (updateReviewById === 0) {
      res.status(404).send("not found");
    } else {
      res.status(200).json({ data: updateReviewById, message: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id: reviewId } = req.params;
    const deleteReview = await knex("review").where("id", "=", reviewId).del();

    if (deleteReview) {
      res.status(200).json({ data: deleteReview, message: "ok" });
    } else {
      res.status(404).json({ data: deleteReview, message: "review id was not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});
module.exports = router;
