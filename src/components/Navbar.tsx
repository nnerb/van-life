import { Link, NavLink } from "react-router-dom";

const routes = [
  { id: 1, path: '/host', name: 'Host' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/vans', name: 'Vans' },
]

const Navbar = () => {
  return ( 
    <div className="fixed top-0 bg-orange-50 w-full py-10 z-10 shadow-md ">
      <div className="max-w-screen-lg mx-auto flex items-center w-full px-8 gap-12">
        <Link  to="/" className="font-inter-black text-3xl">#VANLIFE</Link>
        <div className="ml-auto text-base flex gap-3 font-inter-semi-bold">
          {routes.map((route) => (
            <NavLink 
              key={route.id}
              to={route.path}
              className={({ isActive}) => isActive ? "underline" : "text-gray-500"} 
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
      
    </div>
   );
}
 
export default Navbar;