import { Outlet } from "react-router-dom";
import HostNavbar from "./components/HostNavbar";

const Host = () => {
  return ( 
    <div className="py-24 px-8 max-w-screen-2xl mx-auto">
      <HostNavbar />
      <Outlet />
    </div>
   );
}
 
export default Host;