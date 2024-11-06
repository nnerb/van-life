import { useOutletContext } from "react-router-dom";
import { Van } from "../../../../../types/vans";
import { phpFormatter } from "../../../../../utils/formatter";

const HostVanPricing = () => {

  const { hostVan } = useOutletContext<{hostVan: Van}>()

  return ( 
    <div className="flex flex-col text-2xl font-inter-bold">
      <p>{phpFormatter.format(hostVan.price)}
        <span className="text-sm text-gray-500">/day</span>
      </p>
    </div>
   );
}
 
export default HostVanPricing;