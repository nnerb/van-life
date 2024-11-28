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

    const data = await res.json();
    const vansData: Van[] = data.vans;

    return vansData; 

  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: "There was an issue fetching the data. Please try again later.",
        statusText: "Network Error",
        status: 0
      } as FetchError;
    } 
    throw error;
  }
};
