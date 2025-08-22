const Mentee = require("../models/Mentee");
const cloudinary = require("../config/cloudinary");
const sendEmail = require("../middlewares/emailService");
const User = require("../models/user.js"); 
const Mentor = require("../models/mentor");
const Request = require("../models/request");
exports.updateProfile = async (req, res) => {
  try {
    const { type, name, age, gender, working, email, phone } = req.body;
    const userId = req.userId; 

    let updateData = {};

    if (type === "update-mentee") {
      updateData = { name, age, gender, working };
    }

    else if (type === "profile-photo-update" && req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "profile_photos"
      });
      updateData = { profilePhoto: result.secure_url };
    }

    else if (type === "email-update" && email) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      req.app.locals[email] = otp; 
      const emailSent = await sendEmail(
        email,
        "Email Verification OTP",
        `Your OTP is ${otp}`
      );
      if (!emailSent) return res.status(500).json({ error: "Failed to send OTP" });
      return res.json({ message: "OTP sent to email" });
    }

  else if (type === "phone-update" && phone) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { $set: { phone } },
      { new: true }
    );
    return res.json({ message: "Phone updated", user: updatedUser });
  } catch (err) {
    console.error("Error updating phone:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

    if (Object.keys(updateData).length > 0) {
      const updatedMentee = await Mentee.findOneAndUpdate(
        { userId },
        { $set: updateData },
        { new: true }
      );
      return res.json({ message: "Profile updated", mentee: updatedMentee });
    }

    res.status(400).json({ error: "Invalid update type or data missing" });

  } catch (err) {
    console.error("Update Profile Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.verifyEmailOtp = async (req, res) => {
  const { email, otp } = req.body;
  const userId = req.userId;

  try {
    
    if (req.app.locals[email] && req.app.locals[email] == otp) {
      
      
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: { email } },
        { new: true }
      );

      
      delete req.app.locals[email];

      return res.json({ message: "Email updated", user: updatedUser });
    }

    res.status(400).json({ error: "Invalid OTP" });

  } catch (err) {
    console.error("Error verifying email OTP:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getContactedMentors = async (req, res) => {
  try {
    const userId = req.userId; 

    
    const mentee = await Mentee.findOne({ userId }).populate("contactedMentors");

    if (!mentee) return res.status(404).json({ error: "Mentee not found" });

    
    const requestIds = mentee.contactedMentors;
    const requests = await Request.find({ _id: { $in: requestIds } }).populate("mentorId");

    
    const mentors = requests.map(req => req.mentorId);

    res.json({ mentors });
  } catch (err) {
    console.error("Get Contacted Mentors Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};



exports.getContactedMentorProfile = async (req, res) => {
  try {
    const { mentorId } = req.body;

    if (!mentorId) {
      return res.status(400).json({ error: "Mentor ID is required" });
    }

    const mentor = await Mentor.findById(mentorId)
     
    if (!mentor) {
      return res.status(404).json({ error: "Mentor not found" });
    }

    res.json({ mentor });
  } catch (err) {
    console.error("Get Contacted Mentor Profile Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
