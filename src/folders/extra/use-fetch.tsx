import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useMemo, useRef, useState } from "react";

import api from "@/api";
import { getItem, setItem } from "@/lib/utils/localStorage";

const STALE_TIME = 5 * 60 * 1000; // 5 minutes

// Type for options parameter (AxiosRequestConfig is a generic type, so we can extend it if needed)
interface UseFetchOptions extends AxiosRequestConfig {
  params?: Record<string, unknown>;
}

// Type for the returned data (generic type to allow flexibility)
interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

const useFetch = <T,>(
  url: string,
  options?: UseFetchOptions
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const abortControllerRef = useRef<AbortController | null>(null);

  const storageKey = useMemo(() => {
    if (!options?.params) {
      return url;
    }
    return url + "?" + JSON.stringify(options.params);
  }, [options, url]);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().getTime();
      const cachedData = getItem<{ data: T; lastFetched: number }>(storageKey);

      if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
        setData(cachedData.data);
        setIsLoading(false);
        return;
      }

      abortControllerRef.current = new AbortController();

      setError(null);
      setIsLoading(true);

      try {
        const response: AxiosResponse<T> = await api.get(url, {
          ...options,
          signal: abortControllerRef.current?.signal,
        });

        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, [options, storageKey, url]);

  useEffect(() => {
    if (!data) return;

    setItem(storageKey, {
      lastFetched: new Date().getTime(),
      data,
    });
  }, [data, storageKey]);

  return { data, error, isLoading };
};

export default useFetch;
