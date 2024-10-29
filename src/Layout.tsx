import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> =  ({ children } ) => {
  return ( 
    <div className="relative overflow-hidden">
      <Navbar />
      {/* Page content goes here */}
      <div className="py-[40px]">
        {children}
      </div>
      <Footer />
    </div>
   );
}
 
export default Layout;