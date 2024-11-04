import { useOutletContext } from "react-router-dom";
import { Van } from "../../../../../types/vans";

const HostVanPhotos = () => {
  const { van } = useOutletContext<{van: Van}>()
  return ( 
    <img src={van.imageUrl} className="h-28 w-28 rounded-md"/>
   );
}
 
export default HostVanPhotos;