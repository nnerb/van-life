import { Link } from "react-router-dom";
// import useVans from "../../../hooks/useVans";
import { phpFormatter } from "../../../utils/formatter";
import { Van } from "../../../types/vans";

interface HostDashboardGridProps {
  vans: Van[]
}

const HostDashboardGrid = ({ vans } : HostDashboardGridProps) => {

  return ( 
    <div className="flex flex-col gap-3">
      {vans.map((van) => (
        <div 
          key={van.id}
          className="bg-white py-4 px-5 w-full flex items-center gap-3 rounded-md shadow-sm"
        > 
          <img src={van.imageUrl} className="h-16 w-16 rounded-md"/>
          <div className="flex flex-col gap-1">
            <h1 className="font-inter-semi-bold text-xl">{van.name}</h1>
            <p className="text-gray-500">{phpFormatter.format(van.price)}<span className="">/day</span></p>
          </div>
          <Link to="" className="ml-auto">Edit</Link>
        </div>
      ))}
    </div>
   );
}
 
export default HostDashboardGrid;