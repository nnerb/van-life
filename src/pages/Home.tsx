import { Link } from "react-router-dom";
import image from "../assets/images/image.png";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <img src={image} className="object-cover w-full h-screen" alt="background" />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 w-full h-full"/>

      {/* Content overlay */}
      <div className="absolute top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 text-center text-white">
        
        <h1 className="text-[clamp(24px,5vw,36px)] font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mt-4 my-6">Add adventure to your life by joining the #vanlife movement.</p>
        <Link to="/vans" className="px-6 py-2 bg-orange-500 text-white rounded-lg">Find your van</Link>
      </div>
    </div>
  );
};

export default Home;
