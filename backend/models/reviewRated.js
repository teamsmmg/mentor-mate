const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewRatedSchema = new Schema(
  {
    mentorId: { type: Schema.Types.ObjectId, ref: "Mentor" },
    requestId: { type: Schema.Types.ObjectId, ref: "Request" },
    comment: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    spam: { type: Boolean, default: false },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ReviewRated", ReviewRatedSchema);
