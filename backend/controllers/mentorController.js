const Mentor = require("../models/mentor.js");

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find()
      .select("userId name profilePhoto currentJob rating bio pricing categories")
      .sort({ rating: -1 }); // optional: sort by rating

    if (!mentors.length) {
      return res
        .status(404)
        .json({ success: false, message: "No mentors found" });
    }

    return res.status(200).json({
      success: true,
      count: mentors.length,
      data: mentors,
    });
  } catch (error) {
    console.error("❌ Error fetching mentors:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};

module.exports = { getMentors };
