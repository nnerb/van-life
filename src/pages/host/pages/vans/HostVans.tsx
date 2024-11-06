import { useLoaderData } from "react-router-dom";
import HostVansGrid from "./components/HostVansGrid";
import { Van } from "../../../../types/vans";


const HostVans = () => {

  const hostVans = useLoaderData() as Van[]
  return ( 
    <div className="flex flex-col gap-8 px-5">
      <h1 className="text-[32px] font-inter-bold">Your listed vans</h1>
      <HostVansGrid hostVans={hostVans}/>
    </div>
   );
}
 
export default HostVans;