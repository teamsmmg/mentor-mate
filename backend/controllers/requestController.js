const jwt = require("jsonwebtoken");
const Request = require("../models/request");
const User = require("../models/userModel");
const Mentee = require("../models/Mentee");
const Mentor = require("../models/mentor");
const sendEmail = require("../middlewares/emailService");

const createRequest = async (req, res) => {
  try {
    // 🔹 1. JWT token decode karke userId nikalo
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // 🔹 2. Mentee details lao
    const mentee = await Mentee.findOne({ userId });
    if (!mentee) {
      return res.status(404).json({ message: "Mentee not found" });
    }

    // 🔹 3. User (mentee) ka email nikal lo
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔹 4. Mentor details lao
    const { mentorId, schedule, messageSent } = req.body;
    const mentor = await Mentor.findById(mentorId).populate("userId"); // mentor ke userId ke sath
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    const mentorEmail = mentor.userId.email;
    const menteeEmail = user.email;

    // 🔹 5. Request create karo
    const newRequest = new Request({
      menteeId: mentee._id,
      mentorId,
      amount: 0,
      transactionNumber: null,
      schedule,
      messageSent,
      status: "pending",
    });

    await newRequest.save();

    // 🔹 6. Email bhejo
    await sendEmail(
      menteeEmail,
      "Mentorship Request Sent",
      `Your request has been sent to mentor ${mentor.name}.`
    );

    await sendEmail(
      mentorEmail,
      "New Mentorship Request",
      `You have received a request from mentee ${mentee.name}.`
    );

    res.status(201).json({
      message: "Request created successfully and emails sent",
      request: newRequest,
    });
  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createRequest };
