const mongoose = require("mongoose");
const contributionSchema = new mongoose.Schema(
  {
    provider: {
      type: mongoose.Schema.type.ObjectId,
      ref: "Provider",
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contribution", contributionSchema);
