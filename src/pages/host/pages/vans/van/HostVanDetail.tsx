import { Link, Outlet, useParams } from "react-router-dom";
import { phpFormatter } from "../../../../../utils/formatter";
import HostVanDetailNavbar from "./HostVanDetailNavbar";
import { FetchError, Van } from "../../../../../types/vans";
import { fetchVan } from "../../../../../utils/fetchVan";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../../components/Loading";
import OfflineError from "../../../../../components/OfflineError";
import VansError from "../../../../../components/VansError";

const HostVanDetail = () => {
  const { id } = useParams<{ id: string }>()

  const { 
    data: hostVan, 
    error,
    isLoading,
  } = useQuery<Van, FetchError>({
    queryKey: ['van', id],
    queryFn: () => fetchVan(`/api/host/vans/${id}`, id!),
    enabled: navigator.onLine
  })


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

  if (!hostVan) {
    return <p>No van data available to display</p>
  }

  return ( 
    <div className="px-5 flex flex-col">
      <div>
        <span>←</span>
        <span className="ml-1 underline text-sm text-gray-600">
          <Link 
            to=".."
            relative="path"
          >
            Back to all vans
          </Link>
        </span>
      </div>
      <div className="bg-white py-6 px-7 mt-9">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col sm:flex-row gap-10 ">
            <img className="h-auto sm:h-60" src={hostVan.imageUrl}/>
            <div className="flex flex-col items-start gap-3">
              <p 
                className={`
                  text-orange-50 px-3 py-1 rounded-md
                  ${hostVan.type === "Simple" && "bg-red-500"}
                  ${hostVan.type === "Rugged" && "bg-green-900"}
                  ${hostVan.type === "Luxury" && "bg-slate-950"}
                `}
              >
                {hostVan.type}
              </p>
              <div className="flex flex-col text-2xl sm:text-4xl  font-inter-bold">
                <h1>{hostVan.name}</h1>
                <p>{phpFormatter.format(hostVan.price)}
                  <span className="text-sm sm:text-lg text-gray-500">/day</span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <HostVanDetailNavbar />
            <Outlet context={{ hostVan }} />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default HostVanDetail;