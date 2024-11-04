import { Link } from "react-router-dom";
import { phpFormatter } from "../../../utils/formatter";
import { Van } from "../../../types/vans";

interface VansGridProps {
  vans: Van[];
  error: string | null;
  searchParams: URLSearchParams,
  activeFilters: string[]
}

const VansGrid = ({ vans, error, searchParams, activeFilters }: VansGridProps) => {

  if (vans.length === 0) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return ( 
    <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-8">
      {vans.map((van) => (
        <Link 
          key={van.id} 
          to={van.id} 
          aria-label={`View details for ${van.name}, 
          priced at $${van.price} per day`}
          state={{ search: `?${searchParams.toString()}`, type: activeFilters }}
        >
          <div className="mt-10 flex flex-col gap-2">
            <img src={van.imageUrl} className="h-full w-full rounded-lg" alt={`Image of ${van.name}`}/>
            <div className="flex items-center w-full text-xl font-inter-semi-bold">
              <h1>{van.name}</h1>
              <p className="ml-auto">
                {phpFormatter.format(van.price)}
                <span className="text-sm text-gray-500">/day</span>
              </p>
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