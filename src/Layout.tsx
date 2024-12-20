
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout =  () => {
  return ( 
    <div className="relative text-gray-900 font-inter-medium bg-orange-50 min-h-screen w-full">
      <Navbar />
      {/* Page content goes here */}
      <div className="py-[40px] max-w-screen-lg mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
   );
}
 
export default Layout;