import React, { useEffect, useState } from "react";

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const [editGenre, setEditGenre] = useState(null);
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = () => {
    fetch("/api/genres")
      .then((res) => res.json())
      .then(setGenres);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this genre?")) {
      await fetch(`/api/genres/${id}`, {
        method: "DELETE",
      });
      fetchGenres();
    }
  };

  const handleEditClick = (genre) => {
    setEditGenre(genre);
    setForm({ name: genre.name, description: genre.description });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!editGenre) return;

    await fetch(`/api/genres/${editGenre.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setEditGenre(null);
    setForm({ name: "", description: "" });
    fetchGenres();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎭 Genre List</h2>

      {/* Edit Form */}
      {editGenre && (
        <form onSubmit={handleFormSubmit} className="mb-6 p-4 bg-gray-50 border rounded">
          <h3 className="font-bold mb-2">Edit Genre: {editGenre.name}</h3>
          <div className="mb-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Genre Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              name="description"
              value={form.description}
              onChange={handleFormChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Update
            </button>
            <button
              type="button"
              onClick={() => setEditGenre(null)}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Genre List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-md transition relative"
          >
            <h3 className="text-lg font-bold text-gray-800">{genre.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{genre.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditClick(genre)}
                className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(genre.id)}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
