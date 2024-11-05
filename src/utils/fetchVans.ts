// utils/fetchVans.ts
export const fetchVans = async () => {
 
  const res = await fetch('/api/host/vans');
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans", 
      statusText: res.statusText,
      status: res.status
    }
  }

  const data = await res.json();
  const vansData = data.vans;
  return vansData;
};
