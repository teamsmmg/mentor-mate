// components/FilterBar.tsx
"use client";
import React from "react";
import { Filter } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string | null) => void;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onSelect,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      {/* Filter icon button */}
      <button
        onClick={() => onSelect(null)}
        className={`flex items-center gap-1 px-4 py-2 rounded-full border transition ${
          !selectedCategory
            ? "bg-black text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Filter className="w-4 h-4" />
        Filters
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
            selectedCategory === cat
              ? "bg-yellow-800 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
