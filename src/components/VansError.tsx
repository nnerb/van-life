import { useRouteError } from "react-router-dom";
import { FetchError } from "../types/vans";

const VansError = () => {
  const error = useRouteError() as FetchError

  console.log('[API/HOST/VANS]: ', error)

  return ( 
    <div className="px-5">
      <h1 className="text-3xl font-inter-bold">Error: {error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
   );
}
 
export default VansError;