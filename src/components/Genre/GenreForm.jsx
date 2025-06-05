import React, { useState, useEffect } from "react";

export default function GenreForm({ initialData = null, onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const isEditMode = !!initialData;

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = isEditMode ? "PUT" : "POST";
    const url = isEditMode ? `/api/genres/${initialData.id}` : "/api/genres";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    if (res.ok) {
      alert(isEditMode ? "Genre updated!" : "Genre created!");
      if (onSuccess) onSuccess();
      if (!isEditMode) {
        setName("");
        setDescription("");
      }
    } else {
      alert("Failed to save genre.");
    }
  };

  const handleDelete = async () => {
    if (!isEditMode) return;
    if (!confirm("Are you sure you want to delete this genre?")) return;

    const res = await fetch(`/api/genres/${initialData.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Genre deleted!");
      if (onSuccess) onSuccess();
    } else {
      alert("Failed to delete genre.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        {isEditMode ? `✏️ Edit Genre: ${initialData.name}` : "➕ Add New Genre"}
      </h2>
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
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditMode ? "Update Genre" : "Create Genre"}
        </button>
        {isEditMode && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
