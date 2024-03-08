
// import React from 'react';
// import { useSearch } from '../Context/SearchContext';
// import Search from '../Componenets/Search';
// import GamesByGenresId from '../Componenets/GamesByGenresId'; 

// function SearchPage() {
//   const { searchResults } = useSearch();

//   return (
//     <div>
//       <h2 className='text-3xl font-bold underline'>Search Results</h2>
//       <Search results={searchResults} />

//       {/* Include the GamesByGenresId component with searchResults */}
//       {searchResults.length > 0 && (
//         <GamesByGenresId gameList={searchResults} selctedGenresName="Search" />
//       )}
//     </div>
//   );
// }

// export default SearchPage;


import React from 'react';
import { useSearch } from '../Context/SearchContext';
import Search from '../Componenets/Search';
import GamesByGenresId from '../Componenets/GamesByGenresId';  // Adjust the path
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function SearchPage() {
  const { searchResults } = useSearch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="relative">
    <Search results={searchResults} />

    {/* Include the GamesByGenresId component with searchResults */}
    {searchResults.length > 0 && (
      <GamesByGenresId gameList={searchResults} selctedGenresName="Search" />
    )}

    {/* Add a button to navigate back to the home page */}
    <button
      className='bg-blue-700 text-white px-2 p-1 absolute top-0 right-0 m-2'
      onClick={handleNavigateHome}
    >
      Go Back to Home
    </button>
  </div>
  );
}

export default SearchPage;


