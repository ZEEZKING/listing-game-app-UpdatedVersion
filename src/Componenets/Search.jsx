// Search.js
import React from "react";

const Search = ({ results }) => {
  return (
    <div className="mt-3">
      {/* {results && results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="my-3 p-3 border rounded-md">
            <h3 className="text-xl font-semibold">{result.name}</h3>
            <p className="text-gray-600">{result.description || "No description available."}</p>
            <p className="text-blue-500 cursor-pointer">More details...</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )} */}
    </div>
  );
}; 

export default Search;
