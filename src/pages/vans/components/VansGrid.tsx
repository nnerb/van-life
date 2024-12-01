import { Link } from "react-router-dom";
import { phpFormatter } from "../../../utils/formatter";
import { FetchError, Van } from "../../../types/vans";
import { useQuery } from "@tanstack/react-query";
import { fetchVans } from "../../../utils/fetchVans";
import Loading from "../../../components/Loading";
import OfflineError from "../../../components/OfflineError";
import VansError from "../../../components/VansError";

interface VansGridProps {
  searchParams: URLSearchParams,
  activeFilters: string[]
}

const VansGrid = ( { searchParams, activeFilters }: VansGridProps) => {

  const {
    data: vans,
    error,
    isLoading,
  } = useQuery<Van[], FetchError>({
    queryKey: ['vans'],
    queryFn: () => fetchVans('/api/vans'),
    retry: 1,
  })

  const vansList: Van[] = vans ?? [];


  const isOffline = !navigator.onLine;

  if (isLoading) {
    return <Loading isLoading={isLoading}/>
  }

  if (isOffline) {
    return <OfflineError />
  }

  if (error) {
    return <VansError error={error}/>
  }

  if (vansList.length === 0) {
    return <p>No vans available to display.</p>;
  }

  const filteredVans = activeFilters.length > 0 
    ? vansList.filter((van) => activeFilters.includes(van.type.toLowerCase())) 
    : vansList;


  return ( 
    <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-8">
      {filteredVans.map((van) => (
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