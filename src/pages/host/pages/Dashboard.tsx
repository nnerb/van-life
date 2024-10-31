import { Link } from "react-router-dom";
import { phpFormatter } from "../../../utils/formatter";
import HostVansGrid from "../components/HostVansGrid";

const Dashboard = () => {
  return ( 
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 px-5 py-9 bg-orange-100 rounded-lg">
        <h2 className="text-3xl font-inter-bold">Welcome!</h2>
        <div className="flex w-full items-center">
          <p className="text-gray-600">
            Income last <span className="text-gray-600 underline font-inter-bold">30 days</span>
          </p>
          <Link className="ml-auto" to="">Details</Link>
        </div>  
        <h3 className="text-4xl font-inter-extra-bold">{phpFormatter.format(4999)}</h3>
      </div>
      <div className="px-5 py-11 bg-orange-200 flex items-center gap-1 rounded-lg">
        <h1 className="text-xl font-inter-bold">Review score</h1>
        <p className="text-lg font-inter-bold">⭐5.0<span className="text-gray-600 font-inter-medium">/5</span></p>
        <Link className="ml-auto font-normal" to="">Details</Link>
      </div>
      <div className="flex flex-col gap-4 py-8 px-5">
        <div className="flex items-center gap">
          <h1 className="font-inter-bold text-xl">Your listed vans</h1>
          <Link to="" className="ml-auto">View all</Link>
        </div>
        <HostVansGrid />
      </div>
    </div>
   );
}
 
export default Dashboard;