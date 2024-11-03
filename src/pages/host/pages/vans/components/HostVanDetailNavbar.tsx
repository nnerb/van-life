import { NavLink, useParams } from "react-router-dom";

const HostVanDetailNavbar = () => {

  const { id } = useParams()

  const routes = [
    { id: 1, path: `/host/vans/${id}`, name: 'Details' },
    { id: 2, path: `/host/vans/${id}/pricing`, name: 'Pricing' },
    { id: 3, path: `/host/vans/${id}/photos`, name: 'Photos' }
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