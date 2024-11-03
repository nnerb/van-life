import { useEffect, useState } from "react";
import { Van } from "../types/vans";

const useVan = (url: string) => {
  const [van, setVan] = useState<Van | null>(null);  // Changed to store a single van object
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVan = async () => {
      const cacheKey = `van-cache-${url}`;
      const cachedVan = localStorage.getItem(cacheKey);

      if (cachedVan) {
        setVan(JSON.parse(cachedVan)); // Set cached data initially
      }

      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        const vanData = data.van; // Access the van object in the response
        setVan(vanData);

        // Update local storage with new data if different from cached data
        if (!cachedVan || JSON.stringify(cachedVan) !== JSON.stringify(vanData)) {
          localStorage.setItem(cacheKey, JSON.stringify(vanData));
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

    fetchVan();
  }, [url]);

  return { van, loading, error };
};

export default useVan;
