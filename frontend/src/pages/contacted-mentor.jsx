
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactedMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTViYWNmYjBkZDJlZDZlNGUwODcwMyIsImlhdCI6MTc1NTc5MDU3OSwiZXhwIjoxNzU2Mzk1Mzc5fQ.SS8PAPgpR_SP3pBNHdZwBClDROMc0eK9WCZPtEXBbmQ";

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profile/get-contacted-mentor", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMentors(res.data.mentors || []);
      } catch (err) {
        console.error("Error fetching contacted mentors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, [token]);

  const handleMentorClick = (mentorId) => {
    localStorage.setItem("selectedMentorId", mentorId);
    navigate("/mentor-details"); // mentor details पेज पर redirect
  };

  if (loading) return <p className="text-center mt-6">Loading mentors...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contacted Mentors</h1>

      {mentors.length === 0 ? (
        <p>No contacted mentors found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor._id}
              onClick={() => handleMentorClick(mentor._id)}
              className="cursor-pointer border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={mentor.profilePhoto || "https://via.placeholder.com/150"}
                alt={mentor.name}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
               <h2 className="text-lg font-semibold">{mentor._id}</h2>
              <h2 className="text-lg font-semibold">{mentor.name}</h2>
              <p className="text-sm text-gray-600">
                {mentor.currentJob?.post} at {mentor.currentJob?.companyName}
              </p>
              <p className="text-sm mt-1">{mentor.bio?.slice(0, 80)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactedMentors;
