import useSWR from "swr";
import fetching from "@services/fetching";

export const useFetching = (url, option) => {
  const { data, error, isLoading } = useSWR(url ? url : null, fetching, option);

  return { data, error, loading: isLoading && !data && !error };
};
