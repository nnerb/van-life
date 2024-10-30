import { Outlet } from "react-router-dom";
import HostNavbar from "./components/HostNavbar";

const Host = () => {
  return ( 
    <div className="mt-[76px] pb-11">
      <HostNavbar />
      <Outlet />
    </div>
   );
}
 
export default Host;