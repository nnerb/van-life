
import { useState } from "react";
import useVans from "../../hooks/useVans";
import VansGrid from "./components/VansGrid";

const filterTypes = [
  { id: 1, name: 'Simple', color: "bg-red-500" },
  { id: 2, name: 'Luxury', color: "bg-slate-950"},
  { id: 3, name: 'Rugged', color: "bg-green-900 " },
]

const Vans = () => {

  const { vans, error } = useVans("/api/vans")

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (type: string) => {
    setActiveFilters((prevActiveFilter) =>
    prevActiveFilter.includes(type) ? 
    prevActiveFilter.filter((filter) => filter != type) :
    [...prevActiveFilter, type])
  }

  const filteredVans = activeFilters.length > 0 
    ? vans.filter((van) => activeFilters.includes(van.type)) 
    : vans;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">Explore our van options</h1>
      <div className="flex gap-2 sm:gap-4 items-center text-xs sm:text-base flex-wrap">
        {filterTypes?.map((filterType) => (
          <button 
            key={filterType.id} 
            className={`py-2 px-4 rounded-md text-gray-600
              ${activeFilters.includes(filterType.name) ? 
              `${filterType.color} text-orange-50` : 
              "bg-orange-100/90"
            }`}
            onClick={() => toggleFilter(filterType.name)}
          >
            {filterType.name}
          </button>
        ))}
        <a onClick={() => setActiveFilters([])} className="underline cursor-pointer">Clear filters</a>
      </div>
      <VansGrid vans={filteredVans} error={error}/>
    </>
   );
}
 
export default Vans;