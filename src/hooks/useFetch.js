import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('could not fetch the data for that resource');
        }

        const result = await response.json();
        setIsLoading(false);
        setData(result);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
