import React, { useState } from "react";

export default function AuthorList({ authors, refreshAuthors }) {
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [form, setForm] = useState({ name: "", bio: "", photo: "" });

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this author?")) {
      await fetch(`/api/authors/${id}`, { method: "DELETE" });
      refreshAuthors();
    }
  };

  const handleEditClick = (author) => {
    setEditingAuthor(author.id);
    setForm({ name: author.name, bio: author.bio, photo: author.photo || "" });
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`/api/authors/${editingAuthor}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEditingAuthor(null);
    setForm({ name: "", bio: "", photo: "" });
    refreshAuthors();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-600 mb-4">👩‍💼 Author List (Admin)</h2>
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
            <div className="flex justify-between mt-4">
              <button className="text-blue-600 hover:underline" onClick={() => handleEditClick(author)}>Edit</button>
              <button className="text-red-600 hover:underline" onClick={() => handleDelete(author.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingAuthor && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Edit Author</h3>
          <form onSubmit={handleUpdate} className="space-y-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Author Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="photo"
              value={form.photo}
              onChange={handleInputChange}
              placeholder="Photo URL"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Update Author
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
