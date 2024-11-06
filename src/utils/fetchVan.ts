import { FetchError, Van } from "../types/vans";

export const fetchVan = async (url: string): Promise<Van> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw {
        message: "There was an issue fetching the data. Please try again later.", 
        statusText: res.statusText,
        status: res.status
      } as FetchError;
    }

    const data = await res.json();
    const vanData: Van = data.vans;

    const cacheKey = `vans-cache-${url}`;
    const cachedVans = localStorage.getItem(cacheKey);

    if (cachedVans) {
      try {
        const parsedVan = JSON.parse(cachedVans);    
        if (JSON.stringify(parsedVan) !== JSON.stringify(vanData)) {
          localStorage.setItem(cacheKey, JSON.stringify(vanData));
        }
        return vanData;
      } catch (error) {
        console.log('Error parsing cached vans:', error);
        localStorage.removeItem(cacheKey); 
      }
    }

    localStorage.setItem(cacheKey, JSON.stringify(vanData));
    return vanData; 

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
