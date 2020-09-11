const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

const DreamprintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at leaset {MINLENGTH} characters"],
    },
    zipcode: {
      type: Number,
      required: [true, requiredErrMsg],
    },
    email: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at leaset {MINLENGTH} characters"],
    },
    title: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    category: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least 0"],
    },
    description: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least 0"],
    },
    imgUrl: {
      type: String,
      required: [true, requiredErrMsg],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
    donation: {
      type: Number,
      required: [true, requiredErrMsg],
    },
  },
  { timestamps: true }
);

// Registering the model with mongoose
const Dreamprint = mongoose.model("Dreamprint", DreamprintSchema);

module.exports = Dreamprint;
