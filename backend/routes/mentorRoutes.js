const express = require('express');
const { getMentors } = require('../controllers/mentorController.js');
// const userAuth = require('../middleware/userAuth.js');

const mentorRouter = express.Router();

mentorRouter.get('/mentor-data', getMentors);

module.exports = mentorRouter;
