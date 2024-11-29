import { Outlet } from "react-router-dom";

const VanLayout = () => {
  return ( 
    <div className="py-24 px-5 max-w-screen-2xl mx-auto">
      <Outlet />
    </div>
   );
}
 
export default VanLayout;