
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout =  () => {
  return ( 
    <div className="relative overflow-hidden">
      <Navbar />
      {/* Page content goes here */}
      <div className="py-[40px]">
        <Outlet />
      </div>
      <Footer />
    </div>
   );
}
 
export default Layout;