import { useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams()
  return ( 
    <div>
      Host van details goes here! {id}
    </div>
   );
}
 
export default HostVanDetails;