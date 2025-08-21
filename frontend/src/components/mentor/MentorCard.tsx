// components/MentorCard.tsx
import React from "react";
import { Star } from "lucide-react";

interface MentorProps {
  name: string;
  profilePhoto: string;
  currentJob?: {
    post?: string;
    companyName?: string;
  };
  rating: number;
  reviews: number;
  bio: string;
  categories?: string[];
  pricing?: {
    amount?: number;
    currency?: string;
  };
}


export default function MentorCard({
  name,
  profilePhoto,
  currentJob,
  rating,
  reviews,
  bio,
  categories = [],
  pricing,
}: MentorProps) {
  return (
    <div className="max-w-sm rounded-2xl shadow-md bg-white p-4 ring-1 ring-gray-100">
      {/* Mentor Image & Name */}
      <div className="flex items-center space-x-3">
        <img
          src={profilePhoto || "https://via.placeholder.com/60"}
          alt={name}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900 text-lg">{name}</h2>
          {currentJob?.post && (
            <p className="text-sm text-gray-500">
              {currentJob.post} @ {currentJob.companyName}
            </p>
          )}
        </div>
      </div>

      {/* Categories (Tags) */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {categories.slice(0, 3).map((cat, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center mt-3 space-x-1 text-gray-700">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-xs text-gray-400">({reviews})</span>
      </div>

      {/* Bio */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{bio}</p>

      {/* Pricing */}
      {pricing?.amount && (
  <p className="mt-3 text-sm font-semibold text-gray-800">
    {pricing.amount} {pricing.currency || "INR"} / session
  </p>
)}


      {/* Action Button */}
      <div className="mt-4">
        <button className="w-full rounded-md bg-indigo-600 text-white py-2 text-sm font-medium shadow hover:bg-indigo-700 transition">
          Book Session
        </button>
      </div>
    </div>
  );
}
