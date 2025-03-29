"use client";
import React, { useState, useEffect } from "react";

const TagsSelector: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // Fetch tags from API
    fetch("/api/tags")
      .then((response) => response.json())
      .then((data) => setTags(data.tags));
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Tags</label>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <div className="h-40 overflow-y-auto">
        {tags
          .filter((t) => t.includes(search))
          .map((tag) => (
            <div key={tag} className="p-2 border rounded mb-1 cursor-pointer">
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TagsSelector;
