import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Van } from "../../types/vans";
import { phpFormatter } from "../../utils/formatter";

interface StateProps {
  search: string
}

const VanDetail = () => {

  const params = useParams()
  const [van, setVan] = useState<Van>()
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    const fetchVans = async () => {
      const cachedVan = localStorage.getItem(`van-${params.id}`);
      let cachedData
      if (cachedVan) {
        cachedData = JSON.parse(cachedVan);
        setVan(cachedData);
      }
      try {
        const res = await fetch(`/api/vans/${params.id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();

        // Compare cached data with the fetched data
        if (!cachedData || JSON.stringify(cachedData) !== JSON.stringify(data.vans)) {
          setVan(data.vans); // Update state with new data
          localStorage.setItem(`van-${params.id}`, JSON.stringify(data.vans)); // Update localStorage
        }
        localStorage.setItem(`van-${params.id}`, JSON.stringify(data.vans));
      } catch (error) {
        console.error("Error fetching vans:", error);
      }
    }
    fetchVans()
  }, [params.id])


  const backToVanUrl = (location.state as StateProps).search || '';

  return ( 
    <div>
      <span>←</span>
      <span className="ml-1 underline text-sm text-gray-600">
        <Link 
          to={`..${backToVanUrl}`}
        >
          Back to all vans
        </Link>
      </span>
      {van ? (
        <div className="flex gap-10 flex-col sm:flex-row">
          <img src={van.imageUrl} className="rounded-lg h-auto sm:h-96"/>
          <div className="flex flex-col gap-5 items-start">
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
                <p>{phpFormatter.format(van.price)}
                  <span className="text-sm text-gray-500">/day</span>
                </p>
              </div>
              <p>{van.description}</p>

              <button 
                className="font-bold text-gray-50 bg-orange-400 py-2 w-full sm:max-w-60 rounded-md"
              >
                Rent this van
              </button>
          </div>
        </div>
      ) : <h2> Loading... </h2>}
    </div>
   );
}
 
export default VanDetail;