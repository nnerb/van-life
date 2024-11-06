import { FetchError, Van } from "../types/vans";
import { fetchVans } from "./fetchVans";

export const fetchVan = async (url: string, id: string): Promise<Van> => {
  try {

    const vanUrl = url.startsWith('/api/vans') ? '/api/vans' : '/api/host/vans';
    const vans = await fetchVans(vanUrl);
    const van = vans.find((van) => van.id === id);

    if (!van) {
      throw {
        message: `Van with ID ${id} not found.`,
        statusText: "Not Found",
        status: 404,
      } as FetchError;
    }
  
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
    
    const cacheKey = `van-cache-${url}`;
    const cachedVan = localStorage.getItem(cacheKey);

    if (cachedVan) {
      try {
        const parsedVan = JSON.parse(cachedVan);    
        if (JSON.stringify(parsedVan) !== JSON.stringify(vanData)) {
          localStorage.setItem(cacheKey, JSON.stringify(vanData));
        }
        return vanData;
      } catch (error) {
        console.log('Error parsing cached van:', error);
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
