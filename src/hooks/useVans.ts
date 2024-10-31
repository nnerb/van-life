// src/hooks/useVans.ts
import { useEffect, useState } from "react";
import { Van } from "../types/vans";

const useVans = () => {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVans = async () => {
    const cachedVans = localStorage.getItem('vans');
    // Load from local storage if available
    if (cachedVans) {
      setVans(JSON.parse(cachedVans)); // Set cached data initially
    }

    setLoading(true); // Start loading

    try {
      const res = await fetch("/api/vans"); // Fetch from API
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const { vans } = await res.json(); // Assume your response structure
      setVans(vans); // Update state with fetched vans

      // Update local storage with new data if different from cached data
      if (!cachedVans || JSON.stringify(cachedVans) !== JSON.stringify(vans)) {
        localStorage.setItem('vans', JSON.stringify(vans));
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Handle known Error type
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchVans(); // Call fetchVans when the hook is mounted
  }, []); // Empty dependency array to run only on mount

  return { vans, loading, error }; // Return state
};

export default useVans;
