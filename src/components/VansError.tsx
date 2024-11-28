import { FetchError } from "../types/vans";

const VansError = ({ error }: { error: FetchError | null }) => {

  if (!error) {
    return null
  }

  const userFriendlyMessage = "Something went wrong. Please try again later.";

  console.log("Error details:", error);

  return (
    <h1 className="text-2xl font-inter-bold text-red-500">Error: {userFriendlyMessage}</h1>
  );
};

export default VansError
