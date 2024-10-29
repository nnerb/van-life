import { useEffect, useState } from "react";
import { Van } from "../../../types/vans";
import { Link } from "react-router-dom";

const VansGrid = () => {
  const [vans, setVans] = useState<Van[]>([])

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch("/api/vans");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setVans(data.vans); 
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    }
    fetchVans()
  }, [])

  if (vans.length === 0) {
    return <h2>Loading...</h2>
  }

  return ( 
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
      {vans.map((van) => (
        <Link key={van.id} to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, 
          priced at $${van.price} per day`}>
          <div className="mt-10 flex flex-col gap-2">
            <img src={van.imageUrl} className="h-full w-full rounded-lg" alt={`Image of ${van.name}`}/>
            <div className="flex items-center w-full text-2xl font-bold">
              <h1>{van.name}</h1>
              <p className="ml-auto">${van.price}<span className="text-sm text-gray-500">/day</span></p>
            </div>
            <div>
              <button 
                className={`
                  text-orange-50 px-3 py-1 rounded-md
                  ${van.type === "Simple" && "bg-red-500"}
                  ${van.type === "Rugged" && "bg-green-900"}
                  ${van.type === "Luxury" && "bg-slate-950"}
                `}
              >
                {van.type}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
   );
}
 
export default VansGrid;