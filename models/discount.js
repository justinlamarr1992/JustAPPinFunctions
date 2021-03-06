const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: "Name is Required",
      minlength: [6, "Too Short"],
      maxlength: [12, "Too Long"],
    },
    expiry: { type: Date, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Discount", discountSchema);
