import React from "react";
import "./Search.css";

const Search = ({ input, setInput, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="type here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button type="submit">Search Image</button>
    </form>
  );
};

export default Search;
