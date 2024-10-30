import { Link, useParams } from "react-router-dom";
import VanLayout from "./VanLayout";
import { useEffect, useState } from "react";
import { Van } from "../../types/vans";

const VanDetail = () => {

  const params = useParams()
  console.log(params)

  const [van, setVan] = useState<Van>()

  useEffect(() => {
    const fetchVans = async () => {

      const cachedVan = localStorage.getItem(`van-${params.id}`);
      if (cachedVan) {
        setVan(JSON.parse(cachedVan));
        return; // Return early if we have cached data
      }
      try {
        const res = await fetch(`/api/vans/${params.id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setVan(data.vans); 
        localStorage.setItem(`van-${params.id}`, JSON.stringify(data.vans));
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    }
    fetchVans()
  }, [params.id])

  return ( 
    <VanLayout>
      <div>
        <span>←</span>
        <span className="ml-1 underline text-sm text-gray-600">
          <Link to="/vans">
            Back to all vans
          </Link>
        </span>
        {van ? (
          <div className="flex gap-10 flex-col sm:flex-row">
            <img src={van.imageUrl} className="rounded-lg h-auto sm:h-96"/>
            <div className="flex flex-col gap-5 items-start">
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
                <div className="flex flex-col text-2xl font-bold">
                  <h1>{van.name}</h1>
                  <p>${van.price}<span className="text-sm text-gray-500">/day</span></p>
                </div>
                <p>{van.description}</p>

                <button className="font-bold text-gray-50 bg-orange-400 py-2 w-full sm:w-60 rounded-md">Rent this van</button>
            </div>
          </div>
        ) : <h2> Loading... </h2>}
      </div>
    </VanLayout>

   );
}
 
export default VanDetail;