import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return ( 
    <div>
      Hello
    </div>
   );
}
 
export default Error;