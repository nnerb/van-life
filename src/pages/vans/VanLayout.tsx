import { Outlet } from "react-router-dom";

const VanLayout = () => {
  return ( 
    <div className="py-24 px-8">
      <Outlet />
    </div>
   );
}
 
export default VanLayout;