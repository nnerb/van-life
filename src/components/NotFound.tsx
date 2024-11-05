import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return ( 
    <div className="grid place-items-center px-5 max-w-screen-sm mx-auto h-screen py-[-6rem]">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-inter-bold text-center">Sorry, the page you were looking for was not found.</h1>
        <Link 
          to=""
          className="text-[18px] text-center bg-black py-3 text-white w-full max-w-96 rounded-md"
        >
          Return to home
        </Link>
      </div>
    </div>
   );
}
 
export default NotFoundPage;