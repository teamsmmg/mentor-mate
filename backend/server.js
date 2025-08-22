const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const menteeProfileRoutes = require("./routes/menteeProfileRoute");
const authRouter = require('./routes/authRoutes');
const mentorProfileRouter = require("./routes/mentorProfileRoutes");
const requestRoutes = require("./routes/requestRoutes");

dotenv.config();
connectDB();

const app = express();

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/profile", menteeProfileRoutes);
app.use('/api/mentor', mentorProfileRouter);
app.use('/api/auth', authRouter);

app.use("/api", requestRoutes);

app.get('/', (req, res) => {
  res.send('🏥 Server API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
