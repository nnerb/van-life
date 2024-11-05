import { Link, } from "react-router-dom";
// import useVans from "../../../../../hooks/useVans";
import { phpFormatter } from "../../../../../utils/formatter";
import { Van } from "../../../../../types/vans";

interface HostVansGridProps {
  data: Van[]
}

const HostVansGrid = ({ data } : HostVansGridProps) => {

  // const { vans, error, loading } = useVans("/api/host/vans")

  // console.log(data)

  // if (loading) {
  //   return <p>Loading...</p>
  // }

  // if (error) {
  //   return (
  //     <div className="text-gray-500">
  //       <span>← </span>
  //       <Link className="underline "to="..">
  //         Back to dashboard
  //       </Link>
  //       <p className="text-lg bold text-red-500">
  //         Something went wrong while fetching data. Please try again later.
  //       </p>
        
  //     </div>
  //   )
  // }

  // if (!vans) {
  //   return <p>Vans not found</p>
  // }

  return ( 
    <div className="flex flex-col gap-3">
      {data.map((van) => (
        <Link
          to={`/host/vans/${van.id}`}
          key={van.id}
          className="bg-white py-4 px-5 w-full flex items-center gap-3 cursor-pointer rounded-md shadow-sm"
        > 
          <img src={van.imageUrl} className="h-16 w-16 rounded-md"/>
          <div className="flex flex-col gap-1">
            <h1 className="font-inter-semi-bold text-xl">{van.name}</h1>
            <p className="text-gray-500">{phpFormatter.format(van.price)}<span className="">/days</span></p>
          </div>
        </Link>
      ))}
    </div>
   );
}
 
export default HostVansGrid;