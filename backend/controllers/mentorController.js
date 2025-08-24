const Mentor = require("../models/mentor.js");
const Request = require("../models/request.js");


const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find().select(
      "userId name profilePhoto categories currentJob price rating bio"
    );

    if (!mentors.length) {
      return res.status(404).json({ success: false, message: "No mentors found" });
    }

    return res.status(200).json({ success: true, count: mentors.length, mentors });
  } catch (error) {
    console.error("❌ Error fetching mentors:", error.message);
    return res.status(500).json({ success: false, message: "Server error, please try again later." });
  }
};


const getMentorProfile = async (req, res) => {
  try {
    const { userId } = req.body; 
    const mentor = await Mentor.findById(userId);

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    return res.json({
      success: true,
      mentor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateMentorProfile = async (req, res) => {
  try {
    const { mentorId } = req.body;
    const {
      name,
      profilePhoto,
      college,
      currentJob,
      bio,
      categories,
      videoLink,
      photos,
      experience,
    } = req.body;

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    if (name) mentor.name = name;
    if (profilePhoto) mentor.profilePhoto = profilePhoto;
    if (college) mentor.college = college;
    if (currentJob) mentor.currentJob = currentJob;
    if (bio) mentor.bio = bio;
    if (categories) mentor.categories = categories;
    if (videoLink) mentor.videoLink = videoLink;
    if (photos) mentor.photos = photos;
    if (experience) mentor.experience = experience;

    await mentor.save();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      mentor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};


const getMenteeRequest = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const mentor = await Mentor.findOne({ userId: userId });
    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "Mentor not found",
      });
    }

    const requests = await Request.find({ mentorId: mentor._id });

    return res.json({
      success: true,
      requests,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};


const updatePendingRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    if (!requestId) {
      return res.status(400).json({
        success: false,
        message: "Request ID is required",
      });
    }

    const existingRequest = await Request.findById(requestId);

    if (!existingRequest) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    if (existingRequest.status === "accepted") {
      return res.status(400).json({
        success: false,
        message: "Request is already accepted",
      });
    }

    existingRequest.status = "accepted";
    await existingRequest.save();

    return res.json({
      success: true,
      message: "Request status updated successfully",
      request: existingRequest,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};


module.exports = {
  getMentors,
  getMentorProfile,
  updateMentorProfile,
  getMenteeRequest,
  updatePendingRequest
};
