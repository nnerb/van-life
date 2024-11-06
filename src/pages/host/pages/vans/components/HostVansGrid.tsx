import { Link, } from "react-router-dom";
// import useVans from "../../../../../hooks/useVans";
import { phpFormatter } from "../../../../../utils/formatter";
import { Van } from "../../../../../types/vans";

interface HostVansGridProps {
  hostVans: Van[]
}

const HostVansGrid = ({ hostVans } : HostVansGridProps) => {

  return ( 
    <div className="flex flex-col gap-3">
      {hostVans.map((hostVan) => (
        <Link
          to={`/host/vans/${hostVan.id}`}
          key={hostVan.id}
          className="bg-white py-4 px-5 w-full flex items-center gap-3 cursor-pointer rounded-md shadow-sm"
        > 
          <img src={hostVan.imageUrl} className="h-16 w-16 rounded-md"/>
          <div className="flex flex-col gap-1">
            <h1 className="font-inter-semi-bold text-xl">{hostVan.name}</h1>
            <p className="text-gray-500">{phpFormatter.format(hostVan.price)}<span className="">/days</span></p>
          </div>
        </Link>
      ))}
    </div>
   );
}
 
export default HostVansGrid;