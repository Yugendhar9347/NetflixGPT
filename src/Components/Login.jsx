import Body from "./Body";
import Header from "./Header";
import {Background_Img} from "../Components/Constants"


function Login() {
  

  return (
    <div className=" w-screen h-screen">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src= {Background_Img}
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
