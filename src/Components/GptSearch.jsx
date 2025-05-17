// import React from 'react'
// import { useSelector } from 'react-redux';
// import GptSearchBar from './GptSearchBar';

// const GptSearch = () => {

//     const searcToggle = useSelector((store)=>store.gptsearch.showgptSearch);

//   return (
//     <div>
//       <GptSearchBar/>
//     </div>
//   )
// }

// export default GptSearch


import GptMovieSuggestions from "./GptMovieSuggestions";

import { BG_URL } from "./Constants";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="h-screen w-screen object-cover " src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;