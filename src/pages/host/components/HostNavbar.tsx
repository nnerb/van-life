import { NavLink } from "react-router-dom";

const HostNavbar = () => {

  const routes = [
    { id: 1, path: '.', name: 'Dashboard' },
    { id: 2, path: 'income', name: 'Income' },
    { id: 3, path: 'vans', name: 'Vans' },
    { id: 4, path: 'reviews', name: 'Reviews'}
  ]

  return ( 
    <div className="flex gap-4 py-9 px-5 text-sm md:text-[18px] bg-orange-50">
      {routes.map((route) => (
        <NavLink 
          key={route.id} 
          to={route.path} 
          className={({ isActive}) => 
            isActive ? 
            'font-inter-bold underline ' : 
            'text-gray-500'
          } 
            end={route.name === "Dashboard" ? true : false}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
   );
}
 
export default HostNavbar;