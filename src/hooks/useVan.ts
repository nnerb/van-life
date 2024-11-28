import { useEffect, useState } from "react";
import { Van } from "../types/vans";

const useVan = (url: string) => {
  const [van, setVan] = useState<Van | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVan = async () => {
     
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const cacheKey = `van-cache-${url}`;
        const cachedVan = localStorage.getItem(cacheKey);
  
        if (cachedVan) {
          try {
            const parsedData = JSON.parse(cachedVan);
            // Validate the structure of the cached data
            if (parsedData && typeof parsedData === 'object' && 'id' in parsedData) {
              console.log('Using cached data:', parsedData);
              setVan(parsedData); // Set cached data initially
            } else {
              console.warn('Cached data structure is invalid:', parsedData);
            }
          } catch (e) {
            console.error('Failed to parse cached data:', e);
            // Optionally clear the invalid cache
            localStorage.removeItem(cacheKey);
          }
        } else {
          console.log('No cached data found. Proceeding to fetch new data.');
        }
  

        const data = await res.json();
        const vanData = data.vans; // Access the van object in the response
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
