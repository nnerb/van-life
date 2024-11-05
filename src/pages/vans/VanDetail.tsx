import { Link, useLocation, useParams } from "react-router-dom";
import { phpFormatter } from "../../utils/formatter";
import useVan from "../../hooks/useVan";
import useVans from "../../hooks/useVans";
import NotFoundPage from "../../components/NotFound";

interface LocationState {
  search: string;
  type: string[];
}

const VanDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const state = location.state as LocationState
  const backToVanUrl = state.search || '';
  const types = state.type || []

  const { vans, error: vansError, loading: vansLoading } = useVans('/api/vans')
  const { van, error, loading } = useVan(`/api/vans/${id}`)

 
  if (loading || vansLoading ) {
    return <h1>Loading...</h1>
  }

  if (error || vansError) {
    const errorMessage = error || vansError
    console.log('Error: ', errorMessage)
    return <h1>Something went wrong</h1>
  }

  if (!van) {
    return <h1>Van not found</h1>
  }

  const findVanIndex = vans.findIndex((van) => van.id === id)

  if (findVanIndex === -1) {
    return <NotFoundPage />
  }

  const getTypesText = (types: string[]) => {
    if (types.length === 1) return types[0];
    if (types.length === 2) return `${types[0]} and ${types[1]}`;
    return 'all'
  };

  return ( 
    <div>
      <span>←</span>
      <span className="ml-1 underline text-sm text-gray-600">
        <Link 
          to={`..${backToVanUrl}`}
        >
          Back to {getTypesText(types)} vans
        </Link>
      </span>
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
    </div>
   );
}
 
export default VanDetail;