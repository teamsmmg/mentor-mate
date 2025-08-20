"use client";

import React, { useEffect, useState } from "react";
import MentorCard from "../components/mentor/MentorCard";
import FilterBar from "../components/FilterBar";
import { Navigation } from "lucide-react";

interface Mentor {
  _id: string;
  name: string;
  profilePhoto?: string;
  categories?: string[];
  currentJob?: {
    post?: string;
    companyName?: string;
  };
  rating?: number;
  reviews?: any[];
  bio: string;
  pricing?: {
    amount?: number;
    currency?: string;
  };
}

export default function MentorGrid() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/mentor/mentor-data");
        const data = await res.json();

        if (data.success) {
          console.log("Fetched mentors:", data.data); // ✅ fixed trailing dot
          setMentors(data.data);          // ✅ fixed trailing dot
          setFilteredMentors(data.data);
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Filter logic
  useEffect(() => {
    if (selectedCategory) {
      setFilteredMentors(
        mentors.filter((m) => m.categories?.includes(selectedCategory))
      );
    } else {
      setFilteredMentors(mentors);
    }
  }, [selectedCategory, mentors]);

  if (loading) return <p className="p-8">Loading mentors...</p>;

  // Collect all categories dynamically
  const allCategories = Array.from(
    new Set(mentors.flatMap((m) => m.categories || []))
  );

  return (
    <>
    <Navigation />
    <div className="p-8">
      {/* 🔹 Filter Bar */}
      <FilterBar
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* 🔹 Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <MentorCard
              key={mentor._id}
              name={mentor.name}
              profilePhoto={mentor.profilePhoto || "/placeholder.svg"}
              currentJob={mentor.currentJob}
              rating={mentor.rating || 0}
              reviews={mentor.reviews?.length || 0}
              bio={mentor.bio}
              categories={mentor.categories || []}
              pricing={{
                amount: mentor.pricing?.amount || 0,
                currency: mentor.pricing?.currency || "INR",
              }}
            />
          ))
        ) : (
          <p>No mentors found</p>
        )}
      </div>
    </div>
    </>
  );
}
