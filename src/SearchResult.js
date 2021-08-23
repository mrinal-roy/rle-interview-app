import React from "react";

function SearchResult({ searchfor }) {
  return (
    <div>
      {!(searchfor.length === 0) && (
        <h3>Search Results For: {searchfor}</h3>
      )}
    </div>
  );
}

export default SearchResult;
