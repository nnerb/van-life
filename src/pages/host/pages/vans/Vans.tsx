import { useLoaderData } from "react-router-dom";
import HostVansGrid from "./components/HostVansGrid";
import { Van } from "../../../../types/vans";


const HostVans = () => {

  const vans = useLoaderData() as Van[]

  console.log(vans)
  return ( 
    <div className="flex flex-col gap-8 px-5">
      <h1 className="text-[32px] font-inter-bold">Your listed vans</h1>
      <HostVansGrid vans={vans}/>
    </div>
   );
}
 
export default HostVans;