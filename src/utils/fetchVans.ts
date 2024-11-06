import { FetchError, Van } from "../types/vans";

export const fetchVans = async (url: string): Promise<Van[]> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw {
        message: "There was an issue fetching the data. Please try again later.", 
        statusText: res.statusText,
        status: res.status
      } as FetchError;
    }

    const cacheKey = `vans-cache-${url}`;
    const cachedVans = localStorage.getItem(cacheKey);

    if (cachedVans) {
      try {
        // Attempt to parse cached data
        const parsedVans = JSON.parse(cachedVans);
        if (Array.isArray(parsedVans)) {
          return parsedVans
        } else {
          console.log('Cached data is not an array:', cachedVans);
        }
      } catch (error) {
        console.log('Error parsing cached vans:', error);
        localStorage.removeItem(cacheKey); 
      }
    }

    const data = await res.json();
    const vansData: Van[] = data.vans;

    // Update local storage with new data if different from cached data
    if (!cachedVans || JSON.stringify(cachedVans) !== JSON.stringify(vansData)) {
      localStorage.setItem(cacheKey, JSON.stringify(vansData));
    }
   
    return vansData; 

  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: "There was an issue fetching the data. Please try again later.",
        statusText: "Network Error",
        status: 0
      } as FetchError;
    } else {
      throw error;
    }
  }
};
