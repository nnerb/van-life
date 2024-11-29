import { ClipLoader } from "react-spinners";

const Loading = ({ isLoading } : { isLoading: boolean }) => {
  return ( 
    <div className="flex items-center justify-center gap-1 h-40">
      <p className="text-gray-500 italic text-sm">
        Hang tight, we're getting the details for you...
      </p>
      <ClipLoader size={20} color={"#123abc"} loading={isLoading} />
    </div>
   );
}
 
export default Loading;