import { FC } from "react";
import Layout from "../../Layout";

interface VanLayoutProps {
  children: React.ReactNode
}

const VanLayout: FC<VanLayoutProps> = ({ children }) => {
  return ( 
    <Layout>
      <div className="py-24 px-8">
        {children}
      </div>
    </Layout>
   );
}
 
export default VanLayout;