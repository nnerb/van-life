import VansGrid from "./components/VansGrid";
import VanLayout from "./VanLayout";

const Vans = () => {
  return ( 
    <VanLayout>
      <h1 className="text-3xl font-bold mb-5">Explore our van options</h1>
      <div className="flex gap-4 items-center text-gray-600">
        <button className="bg-orange-100/90 py-2 px-4 rounded-md">Simple</button>
        <button className="bg-orange-100/90 py-2 px-4 rounded-md">Luxury</button>
        <button className="bg-orange-100/90 py-2 px-4 rounded-md">Rugged</button>
        <a href="" className="underline">Clear filters</a>
      </div>
      <VansGrid />
    </VanLayout>  
   );
}
 
export default Vans;