import React from "react";

export default function SearchForm({ searchHandler }) {
  return (
    <section className="search-form">
      <label>
        Search:
        <input
          type="text"
          placeholder="search name"
          name="searchInput"
          onChange={searchHandler}
        />
      </label>
    </section>
  );
}
