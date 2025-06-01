import React, { useState } from "react";

export default function GenreForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/genres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    setName("");
    setDescription("");
    alert("Genre created!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">➕ Add New Genre</h2>
      <input
        type="text"
        placeholder="Genre name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Genre
      </button>
    </form>
  );
}
