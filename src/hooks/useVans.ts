import { useEffect, useState } from "react";
import { Van } from "../types/vans";

const useVans = (url: string) => {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVans = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const cacheKey = `vans-cache-${url}`;
        const cachedVans = localStorage.getItem(cacheKey);
  
        if (cachedVans) {
          try {
            // Attempt to parse cached data
            const parsedVans = JSON.parse(cachedVans);
            if (Array.isArray(parsedVans)) {
              setVans(parsedVans); // Set cached data if it's a valid array
            } else {
              console.warn('Cached data is not an array:', cachedVans);
            }
          } catch (error) {
            console.error('Error parsing cached vans:', error);
            localStorage.removeItem(cacheKey); // Optionally remove corrupted cache
          }
        }

        const data = await res.json()
        const vansData = data.vans
        setVans(vansData);

        // Update local storage with new data if different from cached data
        if (!cachedVans || JSON.stringify(cachedVans) !== JSON.stringify(vansData)) {
          localStorage.setItem(cacheKey, JSON.stringify(vansData));
        }

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, [url]); 

  return { vans, loading, error };
};

export default useVans;
