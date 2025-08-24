import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("category"); // default search type
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(
        `/mentor-listing?search=${encodeURIComponent(search)}&type=${type}`
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar flex items-center gap-2">
      {/* 🔹 Dropdown */}
      <select
        className="search-input border p-2 rounded-lg flex-1"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="category">Category</option>
        <option value="name">Name</option>
        <option value="lang">Language</option>
        <option value="tags">Tags</option>
        <option value="review">Review</option>
      </select>

      {/* 🔹 Input */}
      <input
        type="text"
        placeholder="Search..."
        className="search-input border p-2 rounded-lg flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* 🔹 Button */}
      <button
        className="search-button bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
