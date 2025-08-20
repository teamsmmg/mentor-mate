const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const profileRoutes = require("./routes/profileRoute");
const authRouter = require('./routes/authRoutes');
const mentorRouter = require("./routes/mentorRoutes");

dotenv.config();
connectDB();

const app = express();

// CORS options
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", profileRoutes);
app.use('/api/mentor', mentorRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('🏥 Server API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
