import { Link, useParams } from "react-router-dom";
import useVans from "../../../hooks/useVans";
import { phpFormatter } from "../../../utils/formatter";

const HostVanDetails = () => {
  const { id } = useParams()

  const { vans, error } = useVans(`/api/host/vans/${id}`)
  const van = vans[0]

  if (vans.length === 0) {
    return <p>Loading...</p>
  } 

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return ( 
    <div className="px-5 flex flex-col">
      <div>
        <span>←</span>
        <span className="ml-1 underline text-sm text-gray-600">
          <Link to="/host/vans">
            Back to all vans
          </Link>
        </span>
      </div>
      <div className="bg-white py-6 px-7">
        <div className="flex gap-5 items-center">
          <img className="w-96" src={van.imageUrl}/>
          <div>
          <p 
            className={`
              text-orange-50 px-3 py-1 rounded-md
              ${van.type === "Simple" && "bg-red-500"}
              ${van.type === "Rugged" && "bg-green-900"}
              ${van.type === "Luxury" && "bg-slate-950"}
            `}
          >
            {van.type}
          </p>
          <div className="flex flex-col text-2xl font-inter-semi-bold">
            <h1>{van.name}</h1>
            <p>{phpFormatter.format(van.price)}<span className="text-sm text-gray-500">/day</span></p>
          </div>
          </div>
        </div>
        
      </div>
    </div>
   );
}
 
export default HostVanDetails;