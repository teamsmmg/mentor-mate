import React, { useState } from "react";
import axios from "axios";

const JoinAsExpert = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    exams: [{ name: "", rank: "", image: null }],
    categories: [""],
    college: { name: "", state: "", city: "" },
    currentJob: { post: "", companyName: "", state: "", city: "", image: null },
    experience: [{ post: "", companyName: "", state: "", city: "", image: null }],
  });

  const [message, setMessage] = useState("");

  // 🔹 Convert image → Base64
  const toBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => cb(reader.result);
  };

  const handleChange = (e, path, index = null, field = null) => {
    const { name, value, files } = e.target;
    if (files) {
      toBase64(files[0], (base64) => {
        if (Array.isArray(formData[path])) {
          const updated = [...formData[path]];
          updated[index][field] = base64;
          setFormData({ ...formData, [path]: updated });
        } else {
          setFormData({
            ...formData,
            [path]: { ...formData[path], [name]: base64 },
          });
        }
      });
    } else {
      if (Array.isArray(formData[path])) {
        const updated = [...formData[path]];
        updated[index][field] = value;
        setFormData({ ...formData, [path]: updated });
      } else if (typeof formData[path] === "object") {
        setFormData({
          ...formData,
          [path]: { ...formData[path], [name]: value },
        });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const addItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], {}],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTZjZmM3NDhjYWEwZTk5MDVjYjEzOSIsImlhdCI6MTc1NTg3ODQxNiwiZXhwIjoxNzU2NDgzMjE2fQ.m7QjG1hbiV0UnK9hu7QG-3aCrNQWgdHbYd2WyMlQTlY";
      const res = await axios.post("http://localhost:5000/api/mentor-register", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting form");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-4">Join as Expert</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Photo */}
        <div>
          <label className="block mb-1 font-medium">Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            onChange={(e) =>
              toBase64(e.target.files[0], (base64) =>
                setFormData({ ...formData, profilePhoto: base64 })
              )
            }
          />
        </div>

        {/* Exams */}
        <div>
          <h3 className="font-semibold">Exams</h3>
          {formData.exams.map((exam, idx) => (
            <div key={idx} className="space-y-2 border p-2 rounded-md mb-2">
              <input
                type="text"
                placeholder="Exam Name"
                value={exam.name}
                onChange={(e) => handleChange(e, "exams", idx, "name")}
                className="border p-1 w-full"
              />
              <input
                type="text"
                placeholder="Rank"
                value={exam.rank}
                onChange={(e) => handleChange(e, "exams", idx, "rank")}
                className="border p-1 w-full"
              />
              <input
                type="file"
                onChange={(e) => handleChange(e, "exams", idx, "image")}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem("exams")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            + Add Exam
          </button>
        </div>

        {/* Categories */}
        <div>
          <label className="block mb-1 font-medium">Categories (comma separated)</label>
          <input
            type="text"
            value={formData.categories.join(",")}
            onChange={(e) =>
              setFormData({ ...formData, categories: e.target.value.split(",") })
            }
            className="border p-1 w-full"
          />
        </div>

        {/* College */}
        <div>
          <h3 className="font-semibold">College</h3>
          <input
            type="text"
            name="name"
            placeholder="College Name"
            value={formData.college.name}
            onChange={(e) => handleChange(e, "college")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.college.state}
            onChange={(e) => handleChange(e, "college")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.college.city}
            onChange={(e) => handleChange(e, "college")}
            className="border p-1 w-full"
          />
        </div>

        {/* Current Job */}
        <div>
          <h3 className="font-semibold">Current Job</h3>
          <input
            type="text"
            name="post"
            placeholder="Job Post"
            value={formData.currentJob.post}
            onChange={(e) => handleChange(e, "currentJob")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.currentJob.companyName}
            onChange={(e) => handleChange(e, "currentJob")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.currentJob.state}
            onChange={(e) => handleChange(e, "currentJob")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.currentJob.city}
            onChange={(e) => handleChange(e, "currentJob")}
            className="border p-1 w-full mb-2"
          />
          <input
            type="file"
            name="image"
            onChange={(e) => handleChange(e, "currentJob", null, "image")}
          />
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-semibold">Experience</h3>
          {formData.experience.map((exp, idx) => (
            <div key={idx} className="space-y-2 border p-2 rounded-md mb-2">
              <input
                type="text"
                placeholder="Post"
                value={exp.post}
                onChange={(e) => handleChange(e, "experience", idx, "post")}
                className="border p-1 w-full"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) => handleChange(e, "experience", idx, "companyName")}
                className="border p-1 w-full"
              />
              <input
                type="text"
                placeholder="State"
                value={exp.state}
                onChange={(e) => handleChange(e, "experience", idx, "state")}
                className="border p-1 w-full"
              />
              <input
                type="text"
                placeholder="City"
                value={exp.city}
                onChange={(e) => handleChange(e, "experience", idx, "city")}
                className="border p-1 w-full"
              />
              <input
                type="file"
                onChange={(e) => handleChange(e, "experience", idx, "image")}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem("experience")}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            + Add Experience
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Submit Application
        </button>
      </form>

      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
};

export default JoinAsExpert;
