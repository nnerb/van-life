import { FetchError, Van } from "../types/vans";

export const fetchVans = async (url: string): Promise<Van[]> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
     const error: FetchError = {
        name: 'FetchError',
        message: "There was an issue fetching the data. Please try again later.", 
        statusText: res.statusText,
        status: res.status
      } 
      console.error(`Fetch failed for URL: ${url}`, error); 
      throw error;
    }

    const data = await res.json();
    const vansData: Van[] = data.vans;

    if (!Array.isArray(vansData)) {
      const error: FetchError = {
        name: 'FetchError',
        message: "Invalid response format. Expected 'vans' array.",
        statusText: res.statusText,
        status: res.status,
      };
      console.error("Invalid data format:", data); 
      throw error;
    }
   
    return vansData; 
    
  } catch (error) {
    if (error instanceof Error) {
      const networkError: FetchError = {
        name: 'FetchError',
        message: "There was an issue fetching the data. Please try again later.",
        statusText: "Network Error",
        status: 0,
      };
      console.error("Network or unknown error:", error); // Log the original error for debugging
      throw networkError;
    }

    // If the error is not an instance of Error, we throw a fallback error
      const unknownError: FetchError = {
        name: 'FetchError',
        message: "An unknown error occurred. Please try again later.",
        statusText: "Unknown Error",
        status: 0,
      };
      console.error("Unknown error:", error); // Log the original error for debugging
      throw unknownError;
  }
};
