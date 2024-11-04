
import { useEffect, useState } from "react";
import useVans from "../../hooks/useVans";
import VansGrid from "./components/VansGrid";
import { useSearchParams } from "react-router-dom";

const filterTypes = [
  { id: 1, name: 'Simple', color: "bg-red-500" },
  { id: 2, name: 'Luxury', color: "bg-slate-950"},
  { id: 3, name: 'Rugged', color: "bg-green-900 " },
]

const Vans = () => {

  const { vans, error } = useVans("/api/vans")
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

  const filteredVans = activeFilters.length > 0 
    ? vans.filter((van) => activeFilters.includes(van.type.toLowerCase())) 
    : vans;

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
      <VansGrid vans={filteredVans} error={error} searchParams={searchParams} />
    </>
   );
}
 
export default Vans;