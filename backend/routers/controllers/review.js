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
module.exports={
    createNewReview,
}
