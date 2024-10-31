import { Link } from "react-router-dom";
import { phpFormatter } from "../../../utils/formatter";

const Dashboard = () => {
  return ( 
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 px-8 py-9 bg-orange-100">
        <h2 className="text-3xl font-inter-bold">Welcome!</h2>
        <div className="flex w-full">
          <p className="text-gray-600">
            Income last <span className="text-gray-600 underline font-bold">30 days</span>
          </p>
          <Link className="ml-auto" to="">Details</Link>
        </div>  
        <h3 className="text-4xl font-inter-extra-bold">{phpFormatter.format(4999)}</h3>
      </div>
      <div className="px-8 py-11 bg-orange-200 flex items-center font-bold gap-1">
        <h1 className="text-xl">Review score</h1>
        <p className="text-lg">⭐5.0<span className="text-gray-600">/5</span></p>
        <Link className="ml-auto font-normal" to="">Details</Link>
      </div>
    </div>
   );
}
 
export default Dashboard;