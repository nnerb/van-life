import { Link } from "react-router-dom";
import HostVanDetailContent from "./HostVanDetailContent";

const HostVanDetail = () => {
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
      <HostVanDetailContent />
    </div>
   );
}
 
export default HostVanDetail;