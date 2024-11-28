
import { useEffect, useState } from "react";
import VansGrid from "./components/VansGrid";
import { useSearchParams } from "react-router-dom";
import { FetchError, Van } from "../../types/vans";
import { useQuery } from "@tanstack/react-query";
import { fetchVans } from "../../utils/fetchVans";
import VansError from "../../components/VansError";
import Loading from "../../components/Loading";
import OfflineError from "../../components/OfflineError";

const filterTypes = [
  { id: 1, name: 'Simple', color: "bg-red-500" },
  { id: 2, name: 'Luxury', color: "bg-slate-950"},
  { id: 3, name: 'Rugged', color: "bg-green-900 " },
]

const Vans = () => {
  const {
    data: vans,
    error,
    isLoading,
  } = useQuery<Van[], FetchError>({
    queryKey: ['vans'],
    queryFn: () => fetchVans('/api/vans'),
    retry: 1,
    enabled: navigator.onLine
  })

  const vansList: Van[] = vans ?? [];

  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setActiveFilters(typeParam.split(',').map(type => type.toLowerCase()));
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeFilters.length > 0) {
      setSearchParams({ type: activeFilters.join(',') });
    } else {
      setSearchParams({});
    }
  }, [activeFilters, setSearchParams]);

  const toggleFilter = (type: string) => {
    const lowerCaseType = type.toLowerCase();
    setActiveFilters(prev => 
      prev.includes(lowerCaseType)
        ? prev.filter(filter => filter !== lowerCaseType) // Remove filter
        : [...prev, lowerCaseType] // Add filter
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchParams({})
  };

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
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">Explore our van options</h1>
      <div className="flex gap-2 sm:gap-4 items-center text-xs sm:text-base flex-wrap">
        {filterTypes.map((filterType) => (
          <button 
            key={filterType.id} 
            className={`py-2 px-4 rounded-md text-gray-600
              ${activeFilters.includes(filterType.name.toLowerCase()) ? 
              `${filterType.color} text-orange-50` : 
              "bg-orange-100/90"
            }`}
            onClick={() => toggleFilter(filterType.name.toLowerCase())}
          >
            {filterType.name}
          </button>
        ))}
        {activeFilters.length > 0 && <a onClick={clearFilters} className="underline cursor-pointer">Clear filters</a>}
      </div>
      <VansGrid 
        vans={filteredVans} 
        searchParams={searchParams} 
        activeFilters={activeFilters}

      />
    </>
   );
}
 
export default Vans;