const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestSchema = new Schema(
  {
    menteeId: { type: Schema.Types.ObjectId, ref: "Mentee", required: true },
    mentorId: { type: Schema.Types.ObjectId, ref: "Mentor", required: true },
    amount: { type: Number, default: 0 },
    transactionNumber: { type: String, default: null },
    schedule: {
      date: Number,
      month: Number,
      year: Number,
      time: String,
    },
    messageSent: String,
    status: {
      type: String,
      enum: ["accepted", "pending", "declined", "issue"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// ⚡ Duplicate model error se bachne ke liye
const Request = mongoose.models.Request || mongoose.model("Request", RequestSchema);

module.exports = Request;
