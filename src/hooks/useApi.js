import { useState, useEffect, useCallback } from 'react';

// Custom hook for API calls with loading and error states
export const useApi = (apiFunction, dependencies = [], options = {}) => {
  const [data, setData] = useState(options.initialData || null);
  const [loading, setLoading] = useState(options.initialLoading !== false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      console.error('API Error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    if (options.immediate !== false) {
      execute();
    }
  }, dependencies);

  const refetch = useCallback(() => execute(), [execute]);

  return {
    data,
    loading,
    error,
    execute,
    refetch,
    setData
  };
};

// Custom hook for multiple API calls
export const useMultipleApi = (apiCalls, dependencies = []) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const promises = Object.entries(apiCalls).map(async ([key, apiCall]) => {
          const result = await apiCall();
          return [key, result];
        });

        const results = await Promise.all(promises);
        const dataObject = Object.fromEntries(results);
        setData(dataObject);
      } catch (err) {
        setError(err);
        console.error('Multiple API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

// Custom hook for pagination
export const usePagination = (apiFunction, initialPage = 1, limit = 10) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loadPage = useCallback(async (pageNum, reset = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const newItems = await apiFunction(pageNum, limit);
      
      if (reset) {
        setItems(newItems);
      } else {
        setItems(prev => [...prev, ...newItems]);
      }
      
      setHasMore(newItems.length === limit);
      setPage(pageNum);
    } catch (err) {
      setError(err);
      console.error('Pagination Error:', err);
    } finally {
      setLoading(false);
    }
  }, [apiFunction, limit]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadPage(page + 1, false);
    }
  }, [loading, hasMore, page, loadPage]);

  const refresh = useCallback(() => {
    loadPage(1, true);
  }, [loadPage]);

  useEffect(() => {
    loadPage(1, true);
  }, [loadPage]);

  return {
    items,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    setItems
  };
};

// Custom hook for real-time updates
export const useRealTimeUpdates = (channel, callback) => {
  useEffect(() => {
    // In a real app, this would set up WebSocket or Server-Sent Events
    // For now, we'll simulate with polling
    const interval = setInterval(() => {
      // Simulate checking for updates
      const shouldUpdate = Math.random() > 0.9; // 10% chance
      if (shouldUpdate && callback) {
        callback({
          type: 'update',
          data: { message: 'New update available' }
        });
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [channel, callback]);
};

export default useApi; 