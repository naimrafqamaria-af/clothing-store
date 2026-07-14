import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { keyword } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Search Results</h2>

      <p>
        You searched for:
        <strong> {keyword}</strong>
      </p>
    </div>
  );
}

export default SearchResults;