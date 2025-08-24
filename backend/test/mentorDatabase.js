const mongoose = require("mongoose");
const Mentor = require("../models/mentor"); // apne model ka path correct karo

// MongoDB URI
const MONGO_URI = "mongodb+srv://mentormate:MeNtOrMaTe13579@cluster0.br0aexl.mongodb.net/mentormate?retryWrites=true&w=majority&appName=Cluster0"; // <- apna MongoDB string daalo

// Category list
const categories = [
  "Education",
  "Development",
  "Cyber Security",
  "Optimisation",
  "Maintenance",
  "Designing",
  "AI & Machine Learning",
  "Data Science & Analytics",
  "Cloud Computing",
  "Blockchain & Web3",
  "DevOps & Automation",
  "Digital Marketing",
  "UI/UX Design",
  "Entrepreneurship & Startups",
  "Soft Skills & Communication",
];

// Languages list
const languages = ["german", "french", "hindi", "english", "tamil", "gujrati", "telgu"];

// Helper: Random ek category
const getRandomCategory = () => {
  return categories[Math.floor(Math.random() * categories.length)];
};

// Helper: Random 2 languages
const getRandomLanguages = () => {
  const shuffled = [...languages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

async function updateMentors() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected...");

    const mentors = await Mentor.find();
    console.log(`Found ${mentors.length} mentors`);

    for (let mentor of mentors) {
      mentor.categories = [getRandomCategory()];
      mentor.language = getRandomLanguages();
      await mentor.save();
      console.log(`Updated Mentor: ${mentor.name}`);
    }

    console.log("🎉 All mentors updated successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error:", err);
    mongoose.connection.close();
  }
}

updateMentors();
