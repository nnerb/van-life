import { FetchError, Van } from "../types/vans";

export const fetchVans = async (url: string): Promise<Van[]> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw {
        name: 'FetchError',
        message: "There was an issue fetching the data. Please try again later.", 
        statusText: res.statusText,
        status: res.status
      } as FetchError;
    }

    const data = await res.json();
    const vansData: Van[] = data.vans;

    return vansData; 

  } catch (error) {
    if (error instanceof Error) {
      // Check if there's no internet (network error)
      if (navigator.onLine === false) {
        throw {
          message: "No internet connection. Please check your network settings.",
          statusText: "Network Error",
          status: 0
        } as FetchError;
      }
      
      // Default error for other fetch failures
      throw {
        message: "There was an issue fetching the data. Please try again later.",
        statusText: "Network Error",
        status: 0
      } as FetchError;
    }
    throw error;
  }
};
