import { useOutletContext } from "react-router-dom";
import { Van } from "../../../../../types/vans";

const HostVanPhotos = () => {
  const { hostVan } = useOutletContext<{hostVan: Van}>()
  return ( 
    <img src={hostVan.imageUrl} className="h-28 w-28 rounded-md"/>
   );
}
 
export default HostVanPhotos;