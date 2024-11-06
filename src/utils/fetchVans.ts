import { FetchError, Van } from "../types/vans";

export const fetchVans = async (): Promise<Van[]> => {
  const res = await fetch('/api/host/vans');
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans", 
      statusText: res.statusText,
      status: res.status
    } as FetchError
  }

  const data = await res.json();
  const vansData: Van[] = data.vans;
  return vansData;
};
