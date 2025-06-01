import React, { useEffect, useState } from "react";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/api/authors").then((res) => res.json()).then(setAuthors);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-600 mb-4">👩‍💼 Author List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {authors.map((author) => (
          <div key={author.id} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
            <img
              src={author.photo || "https://via.placeholder.com/150"}
              alt={author.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-600">{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
