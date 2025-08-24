const jwt = require("jsonwebtoken");
const Mentor = require("../models/mentor");
const User = require("../models/user");
const cloudinary = require("../config/cloudinary");

const mentorRegisterController = async (req, res) => {
  try {
    
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    
    const uploadImage = async (image) => {
      if (!image) return null;
      const uploaded = await cloudinary.uploader.upload(image, {
        folder: "mentors",
      });
      return uploaded.secure_url;
    };

    
    const {
      exams,
      categories,
      college,
      currentJob,
      experience,
      profilePhoto,
    } = req.body;

    
    const profilePhotoUrl = profilePhoto ? await uploadImage(profilePhoto) : null;

    
    const examsWithImages = await Promise.all(
      (exams || []).map(async (exam) => ({
        ...exam,
        image: exam.image ? await uploadImage(exam.image) : null,
      }))
    );

    
    const currentJobWithImage = currentJob
      ? {
          ...currentJob,
          image: currentJob.image ? await uploadImage(currentJob.image) : null,
        }
      : null;

    
    const experienceWithImages = await Promise.all(
      (experience || []).map(async (exp) => ({
        ...exp,
        image: exp.image ? await uploadImage(exp.image) : null,
      }))
    );

    
    const mentor = new Mentor({
      userId,
      profilePhoto: profilePhotoUrl,
      exams: examsWithImages,
      categories,
      college,
      currentJob: currentJobWithImage,
      experience: experienceWithImages,
    });

    await mentor.save();

    
    await User.findByIdAndUpdate(userId, { type: "mentor" });

    return res.status(201).json({
      message: "Your application is being submitted",
      mentorId: mentor._id,
    });
  } catch (error) {
    console.error("Mentor Register Error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = mentorRegisterController;
