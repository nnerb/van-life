import HostVansGrid from "./components/HostVansGrid";

const HostVans = () => {
  return ( 
    <div className="flex flex-col gap-8 px-5">
      <h1 className="text-[32px] font-inter-bold">Your listed vans</h1>
      <HostVansGrid />
    </div>
   );
}
 
export default HostVans;