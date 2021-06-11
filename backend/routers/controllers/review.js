const reviewModel = require("./../../db/models/Review");
const usersModel = require("./../../db/models/Users");

const createNewReview = (req, res) => {
  const { rating, comment, user, restaurant } = req.body;

  const newReview = new reviewModel({ rating, comment, user, restaurant });

  newReview
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateReview = (req, res) => {
  const id = req.params.id;
  const { rating, comment } = req.body;

  reviewModel
    .findOneAndUpdate({ _id: id }, { rating, comment }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteReview = (req, res) => {
  const id = req.params.id;
  reviewModel
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json("deleted");
    })
    .catch((err) => res.send(err));
};

const getAllReview = (req, res) => {
  reviewModel
    .find({})
    .populate("user")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getReviewByRestaurantId = (req, res) => {
  const id = req.params.id;
  reviewModel.find({ restaurant: id }).populate("user").exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = {
  createNewReview,
  updateReview,
  deleteReview,
  getAllReview,
  getReviewByRestaurantId,
};
