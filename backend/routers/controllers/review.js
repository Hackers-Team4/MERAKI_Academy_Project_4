const reviewModel = require("./../../db/models/Review");

const createNewReview = (req, res) => {
  const { rating, comment, user } = req.body;

  const newReview = new reviewModel({ rating, comment, user });

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
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewReview,
  updateReview,
  deleteReview,
  getAllReview
};
