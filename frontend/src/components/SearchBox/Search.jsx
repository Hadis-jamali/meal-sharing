import React from "react";
import { FaSearch } from "react-icons/fa";
import './Search.css'
function Search({ search, setSearch, searchHandler }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
