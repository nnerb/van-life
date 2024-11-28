import { Link } from "react-router-dom";
import { phpFormatter } from "../../../utils/formatter";
import { fetchVans } from "../../../utils/fetchVans";
import { useQuery } from "@tanstack/react-query";
import { FetchError, Van } from "../../../types/vans";
import VansError from "../../../components/VansError";
import Loading from "../../../components/Loading";
import OfflineError from "../../../components/OfflineError";

const HostDashboardGrid = () => {

  const {
    data: hostVans,
    error,
    isLoading,
  } = useQuery<Van[], FetchError>({
    queryKey: ['hostVans'],
    queryFn: () => fetchVans('/api/host/vans'),
    retry: 1,
    enabled: navigator.onLine
  })
  const hostVansList: Van[] = hostVans ?? []
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

  if (hostVansList.length === 0) {
    return <p>No vans available to display.</p>;
  }


  return ( 
    <div className="flex flex-col gap-3">
      {hostVansList.map((hostVan) => (
        <div 
          key={hostVan.id}
          className="bg-white py-4 px-5 w-full flex items-center gap-3 rounded-md shadow-sm"
        > 
          <img src={hostVan.imageUrl} className="h-16 w-16 rounded-md"/>
          <div className="flex flex-col gap-1">
            <h1 className="font-inter-semi-bold text-xl">{hostVan.name}</h1>
            <p className="text-gray-500">{phpFormatter.format(hostVan.price)}<span className="">/day</span></p>
          </div>
          <Link to="" className="ml-auto">Edit</Link>
        </div>
      ))}
    </div>
   );
}
 
export default HostDashboardGrid;