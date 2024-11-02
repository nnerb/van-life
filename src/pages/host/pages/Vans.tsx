import { Outlet } from "react-router-dom";

const HostVans = () => {
  return ( 
    <div className="flex flex-col gap-8 px-5">
      <Outlet/>
    </div>
   );
}
 
export default HostVans;