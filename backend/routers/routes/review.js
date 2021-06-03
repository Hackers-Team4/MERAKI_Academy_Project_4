const express = require("express");

const { createNewReview, updateReview,deleteReview } = require("./../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/review", createNewReview);
reviewRouter.put("/review_update/:id", updateReview);
reviewRouter.delete('/review_delete/:id',deleteReview)
module.exports = reviewRouter;
