import { Link, useLocation } from "react-router-dom";
import VanDetailContent from "./VanDetailContent";

interface LocationState {
  search: string;
  type: string[];
}

const VanDetail = () => {
  const location = useLocation()
  const state = location?.state as LocationState
  const backToVanUrl = state?.search || '';
  const types = state?.type || []

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
        <VanDetailContent/>
    </div>
   );
}
 
export default VanDetail;