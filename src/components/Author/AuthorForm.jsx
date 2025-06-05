import React, { useState } from "react";

export default function AuthorForm({ onAuthorCreated }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, photo, bio }),
    });
    setName("");
    setPhoto("");
    setBio("");
    alert("Author created!");
    if (onAuthorCreated) onAuthorCreated(); // Panggil fungsi untuk refresh list
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">➕ Add New Author</h2>
      <input
        type="text"
        placeholder="Author name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
        required
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Create Author
      </button>
    </form>
  );
}
