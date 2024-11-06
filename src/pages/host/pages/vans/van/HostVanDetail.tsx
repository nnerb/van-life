import { Link, Outlet, useLoaderData } from "react-router-dom";
import { phpFormatter } from "../../../../../utils/formatter";
import HostVanDetailNavbar from "./HostVanDetailNavbar";
import { Van } from "../../../../../types/vans";

const HostVanDetail = () => {
  const van = useLoaderData() as Van
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
            <img className="h-auto sm:h-60" src={van.imageUrl}/>
            <div className="flex flex-col items-start gap-3">
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
              <div className="flex flex-col text-2xl sm:text-4xl  font-inter-bold">
                <h1>{van.name}</h1>
                <p>{phpFormatter.format(van.price)}
                  <span className="text-sm sm:text-lg text-gray-500">/day</span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <HostVanDetailNavbar  />
            <Outlet context={{ van }} />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default HostVanDetail;