const Dreamprint = require("../models/3DP.model");

// export an OBJECT that is full of methods
module.exports = {
  // long-form key: value format
  create: function (req, res) {
    Dreamprint.create(req.body)
      .then((dreamprint) => {
        res.json(dreamprint);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    Dreamprint.find()
      .then((dreamprints) => {
        res.json(dreamprints);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log(req);
    Dreamprint.findById(req.params.id)
      .then((dreamprint) => {
        res.json(dreamprint);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    Dreamprint.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((updatedDreamprint) => {
        res.json(updatedDreamprint);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  dislike(req, res) {
    Dreamprint.findById(req.params.id)
      .then((dreamprint) => {
        // function adds to dislike count and then decreases like count when clicked , inspect to see console.log
        dreamprint.dislikeCount++;
        dreamprint.likeCount--;
        // console.log(dreamprint.dislikeCount);

        dreamprint
          .save()
          .then((updatedDreamprint) => {
            res.json(updatedDreamprint);
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    Dreamprint.findByIdAndDelete(req.params.id)
      .then((dreamprint) => {
        res.json(dreamprint);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
