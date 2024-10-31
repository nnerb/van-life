import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="fixed top-0 bg-orange-50 w-full py-10 z-10 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center w-full px-8">
        <Link  to="/" className="font-inter-black text-3xl ">#VANLIFE</Link>
        <div className="ml-auto text-base flex gap-3 text-gray-500 font-semibold">
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
      
    </div>
   );
}
 
export default Navbar;