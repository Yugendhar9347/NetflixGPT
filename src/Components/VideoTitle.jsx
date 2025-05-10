// import React from 'react'

// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className=' absolute px-15 pt-40 w-1/2 z-10 '>
//         {/* <h1 className='font-bold text-5xl p-5'>{title}</h1> */}
//         <h1 className='text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-500 to-indigo-500 text-transparent bg-clip-text p-3 '>{title}</h1>

//         <p className=' text-white text-2xl p-3'>{overview}</p>

//         <div>
//             <button className='text-2xl bg-gray-500 text-white p-3 ml-3 rounded-2xl w-32'> ▶  Play </button>
//             <button className='text-2xl bg-gray-500 text-white p-3 ml-3 rounded-2xl w-32'> ℹ Info </button>
//         </div>

//     </div>
//   )
// }

// export default VideoTitle;


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-indigo-500 text-transparent bg-clip-text">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;