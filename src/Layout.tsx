
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout =  () => {
  return ( 
    <div className="relative overflow-hidden font-mono">
      <Navbar />
      {/* Page content goes here */}
      <div className="py-[40px] max-w-screen-2xl mx-auto bg-orange-50/20">
        <Outlet />
      </div>
      <Footer />
    </div>
   );
}
 
export default Layout;