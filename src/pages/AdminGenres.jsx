import React from "react";
import GenreList from "../components/Genre/GenreList";
import GenreForm from "../components/Genre/GenreForm";

export default function AdminGenres() {
  return (
    <div className="p-6">
      <GenreForm />
      <hr className="my-6" />
      <GenreList />
    </div>
  );
}
