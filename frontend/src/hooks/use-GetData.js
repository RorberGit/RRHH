import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

import axios from "@api/axios_interceptor";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!!url);


  const refresData = useCallback(() => {
    if (url) {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch((error) => {
          if (error.response)
            setError({
              detail: error.response.data.detail,
              status: error.status,
            });
          else setError(error);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setData(null);
      setError(null);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    refresData();
  }, [refresData]);

  return { data, error, loading, refresData };
};

export default useGetData;
