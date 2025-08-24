// App.jsx
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login.tsx"
import SignupPage from "./pages/register.tsx"
import VerifyOtpPage from "./pages/otp.tsx"
import MentorGrid from "./pages/mentor-listing.tsx"
import ContactedMentors from "./pages/contacted-mentor.jsx"
import MentorDetails from "./pages/mentorDetails.jsx"
import LandingPage from "./pages/landing-page.jsx"

import "./App.css"
import JoinAsExpert from "./pages/join-as-expert.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mentor-listing" element={<MentorGrid />} />
      <Route path="/dashboard" element={<ContactedMentors />} />
      <Route path="/mentor-details" element={<MentorDetails />} />
       <Route path="/mentor-register" element={<JoinAsExpert />} />
    </Routes>
  )
}

export default App
