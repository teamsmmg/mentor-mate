const express = require("express");
const {
  getMentors,
  getMentorProfile,
  updateMentorProfile,
  getMenteeRequest,
  updatePendingRequest,
} = require("../controllers/mentorController.js");

const authMiddleware = require("../middlewares/authMiddleware.js");

const mentorRouter = express.Router();

mentorRouter.get("/mentor-data", authMiddleware, getMentors);

// mentor-profile
mentorRouter.post("/get-mentor-profile", getMentorProfile); 
mentorRouter.patch("/update-mentor-profile", updateMentorProfile); 
mentorRouter.post("/get-mentee-request", getMenteeRequest); 
mentorRouter.patch("/update-pending-request", updatePendingRequest); 

module.exports = mentorRouter;
