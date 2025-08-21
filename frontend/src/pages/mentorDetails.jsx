// src/pages/MentorDetails.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const MentorDetails = () => {
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTViYWNmYjBkZDJlZDZlNGUwODcwMyIsImlhdCI6MTc1NTc5MDU3OSwiZXhwIjoxNzU2Mzk1Mzc5fQ.SS8PAPgpR_SP3pBNHdZwBClDROMc0eK9WCZPtEXBbmQ";
  const mentorId = localStorage.getItem("selectedMentorId");

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/profile/get-contacted-mentor-profile",
          { mentorId }, // 👈 सिर्फ mentorId भेज रहे हैं
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setMentor(res.data.mentor);
      } catch (err) {
        console.error("Error fetching mentor:", err);
      } finally {
        setLoading(false);
      }
    };

    if (mentorId) fetchMentor();
  }, [mentorId, token]);

  if (loading) return <p className="text-center mt-6">Loading mentor details...</p>;
  if (!mentor) return <p className="text-center mt-6">Mentor not found</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{mentor.name}</h1>

      {/* Profile Photo */}
      <img
        src={mentor.profilePhoto || "https://via.placeholder.com/150"}
        alt={mentor.name}
        className="w-32 h-32 rounded-full object-cover my-4"
      />

      {/* Bio */}
      <p className="text-lg">{mentor.bio || "No bio available"}</p>

      {/* Current Job */}
      {mentor.currentJob && (
        <p className="text-sm text-gray-600 mt-2">
          {mentor.currentJob.post} at {mentor.currentJob.companyName}
        </p>
      )}

      {/* College */}
      {mentor.college && (
        <p className="text-sm text-gray-600">
          🎓 {mentor.college.name}, {mentor.college.city}, {mentor.college.state}
        </p>
      )}

      {/* Exams */}
      {mentor.exams?.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Exams</h2>
          <ul className="list-disc ml-6">
            {mentor.exams.map((exam, idx) => (
              <li key={idx}>
                {exam.name} - Rank: {exam.rank}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {mentor.experience?.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Experience</h2>
          <ul className="list-disc ml-6">
            {mentor.experience.map((exp, idx) => (
              <li key={idx}>
                {exp.post} at {exp.companyName} ({exp.city}, {exp.state})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing */}
      {mentor.pricing && (
        <p className="mt-4 text-green-600 font-bold">
          💰 {mentor.pricing.amount} {mentor.pricing.currency}
        </p>
      )}

      {/* Rating */}
      <p className="mt-2">⭐ Rating: {mentor.rating || 0}</p>

      {/* Video Link */}
      {mentor.videoLink && (
        <a
          href={mentor.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 block"
        >
          🎥 Watch Intro Video
        </a>
      )}
    </div>
  );
};

export default MentorDetails;
