import { NavLink } from "react-router-dom";

const HostVanDetailNavbar = () => {

  const routes = [
    { id: 1, path: '.', name: 'Details' },
    { id: 2, path: 'pricing', name: 'Pricing' },
    { id: 3, path: 'photos', name: 'Photos' }
  ]


  return ( 
    <div className="flex gap-6 mb-5">
      {routes.map((route) => (
        <NavLink
          key={route.id}
          to={route.path}
          className={({ isActive }) => isActive ? 
            "underline font-inter-bold" : 
            "text-gray-500"
          }
          end={route.name === "Details" ? true : false}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
   );
}
 
export default HostVanDetailNavbar;