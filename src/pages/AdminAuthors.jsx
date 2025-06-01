import React from "react";
import AuthorList from "../components/Author/AuthorList";
import AuthorForm from "../components/Author/AuthorForm";

export default function AdminAuthors() {
  return (
    <div className="p-6">
      <AuthorForm />
      <hr className="my-6" />
      <AuthorList />
    </div>
  );
}
