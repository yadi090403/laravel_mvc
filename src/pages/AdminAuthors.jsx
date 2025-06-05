// src/pages/AdminAuthors.jsx
import React, { useState, useEffect } from "react";
// import AuthorForm from "../components/AuthorForm";
// import AuthorList from "../components/AuthorList";
import AuthorForm from "../components/Author/AuthorForm";
import AuthorList from "../components/Author/AuthorList";
// import AdminAuthorPage from "../components/Author/AdminAuthorPage";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = () => {
    fetch("/api/authors")
      .then((res) => res.json())
      .then(setAuthors);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="p-6">
      <AuthorForm onAuthorCreated={fetchAuthors} />
      <AuthorList authors={authors} refreshAuthors={fetchAuthors} />
    </div>
  );
}
