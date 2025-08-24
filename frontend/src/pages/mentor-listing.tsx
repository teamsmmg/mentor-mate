"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const search = params.get("search");
        const type = params.get("type");

        let apiUrl = "http://localhost:5000/api/mentor-search";

        if (search && type) {
          switch (type) {
            case "name":
              apiUrl += `?name=${encodeURIComponent(search)}`;
              break;
            case "category":
              apiUrl += `?category=${encodeURIComponent(search)}`;
              break;
            case "lang":
              apiUrl += `?lang=${encodeURIComponent(search)}`;
              break;
            case "exam":
              apiUrl += `?exam=${encodeURIComponent(search)}`;
              break;
            case "tags":
              apiUrl += `?tags=${encodeURIComponent(search)}`;
              break;
            case "review":
              apiUrl += `?review=${encodeURIComponent(search)}`;
              break;
            default:
              apiUrl = "http://localhost:5000/api/mentor/mentor-data";
          }
        } else {
          // no params → get all mentors
          apiUrl = "http://localhost:5000/api/mentor/mentor-data";
        }

        const res = await fetch(apiUrl);
        const data = await res.json();

        // ✅ FIX: backend consistency
        const mentorList = data?.mentors || data?.data || [];

        if (data?.success && Array.isArray(mentorList)) {
          console.log("Fetched mentors:", mentorList);
          setMentors(mentorList);
          setFilteredMentors(mentorList);
        } else {
          console.warn("Unexpected API response:", data);
          setMentors([]);
          setFilteredMentors([]);
        }
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setMentors([]);
        setFilteredMentors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, [location.search]);

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

  const allCategories: string[] = Array.from(
    new Set((mentors || []).flatMap((m) => m.categories ?? []))
  );

  return (
    <>
      <Navigation />
      <div className="p-8">
        <FilterBar
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

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
