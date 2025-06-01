import React, { useEffect, useState } from "react";

export default function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("/api/genres").then((res) => res.json()).then(setGenres);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎭 Genre List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <div key={genre.id} className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800">{genre.name}</h3>
            <p className="text-sm text-gray-600">{genre.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
