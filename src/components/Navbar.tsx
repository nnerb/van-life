import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="fixed top-0 flex bg-slate-50 w-full items-center py-10 px-8 z-10">
      <Link  to="/" className="font-black text-3xl ">#VANLIFE</Link>
      <div className="ml-auto text-base flex gap-3 text-gray-500 font-semibold">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
   );
}
 
export default Navbar;