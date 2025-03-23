import { useCallback, useState } from "react";

export const useApi = <T>(apiRequest: (...args: any) => Promise<T>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState(null);

  const submit = useCallback(async (...args: Parameters<typeof apiRequest>) => {
    try {
      setLoading(true);
      const resp = await apiRequest(args);
      setData(resp);
    } catch (e: any) {
      setErrors(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    data,
    errors,
    submit,
  };
};
