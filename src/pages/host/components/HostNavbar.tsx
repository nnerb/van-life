import { NavLink } from "react-router-dom";

const HostNavbar = () => {

  const routes = [
    { id: 1, path: '/host', name: 'Dashboard' },
    { id: 2, path: '/host/income', name: 'Income' },
    { id: 3, path: '/host/vans', name: 'Vans' },
    { id: 4, path: '/host/reviews', name: 'Reviews'}
  ]

  return ( 
    <div className="flex gap-4 py-9 px-8 bg-orange-50">
      {routes.map((route) => (
        <NavLink 
          key={route.id} 
          to={route.path} 
          className={({ isActive}) => 
            isActive ? 
            'font-bold underline text-[18px]' : 
            'text-[18px] text-gray-500'
          } 
            end
        >
          {route.name}
        </NavLink>
      ))}
    </div>
   );
}
 
export default HostNavbar;