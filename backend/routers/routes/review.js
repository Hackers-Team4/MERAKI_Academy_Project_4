const express = require("express");

const { createNewReview, updateReview } = require("./../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/review", createNewReview);
reviewRouter.put("/review_update/:id", updateReview);
module.exports = reviewRouter;
