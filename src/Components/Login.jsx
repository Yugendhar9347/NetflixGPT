// import Body from "./Body";
// import Header from "./Header";

// function Login() {
//   return (
//     <div className="absolute">
//         <div className="absolute bg-gradient-to-l from to-black w-screen h-screen"></div>
//         <Header />
    
//       <img
//       className=" w-screen h-screen object-cover" 
//       src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"></img>


//     </div>
//   );
// }

// export default Login;


import Body from "./Body";
import Header from "./Header";

function Login() {
  return (
    <div className=" w-screen h-screen">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
        alt="Background"
      />

      {/* Full-screen black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent"></div>

      {/* Content above the overlay */}
      <div className="absolute inset-0 z-10">
        <Header />
        
      </div>
      <div className="absolute inset-0 z-11 flex items-center justify-center ">
        <Body />
      </div>
      
    </div>
  );
}

export default Login;
