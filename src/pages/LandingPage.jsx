import React from 'react';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">📚 Welcome to the Bookstore</h1>
        <p className="text-gray-700 text-lg mb-6">Discover amazing books from your favorite genres and authors.</p>
        <div className="space-x-4">
          <a href="/admin/genres" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Browse Genres
          </a>
          <a href="/admin/authors" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Explore Authors
          </a>
        </div>
      </div>
    </div>
  );
}

