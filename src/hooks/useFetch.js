import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch(url, {
          method: options.method || 'GET', // Default to GET if no method is specified
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers, // Merge with additional headers if provided
          },
          body: options.body ? JSON.stringify(options.body) : null, // Stringify body for POST requests
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
  }, [url, options.method, options.headers, options.body]);

  return { data, setData, isLoading, error };
};

export default useFetch;
