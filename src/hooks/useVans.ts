import { useEffect, useState } from "react";
import { Van } from "../types/vans";

const useVans = (url: string) => {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVans = async () => {
      const cacheKey = `vans-cache-${url}`
      const cachedVans = localStorage.getItem(cacheKey);

      if (cachedVans) {
        setVans(JSON.parse(cachedVans)); // Set cached data initially
      }

      setLoading(true)

      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json()
        const { vans } = data
        const vansData = vans
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
