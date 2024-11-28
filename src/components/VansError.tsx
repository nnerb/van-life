import { FetchError } from "../types/vans";

const VansError = ({ error }: { error: FetchError | null }) => {

  if (!error) {
    return null
  }

  const userFriendlyMessage = "Something went wrong. Please try again later.";

  console.log("Error details:", error);

  return (
    <h1 className="text-center text-xl font-semibold text-red-600 bg-red-100 p-4 rounded-md shadow-md">
      Error: {userFriendlyMessage}
    </h1>
  );
};

export default VansError
