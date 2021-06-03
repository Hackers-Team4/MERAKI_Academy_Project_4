const express = require("express");

const { createNewReview, updateReview,deleteReview,getAllReview } = require("./../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/review", createNewReview);
reviewRouter.put("/review_update/:id", updateReview);
reviewRouter.delete('/review_delete/:id',deleteReview)
reviewRouter.get('/review',getAllReview)
module.exports = reviewRouter;
