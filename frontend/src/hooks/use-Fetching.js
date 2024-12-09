import useSWR from "swr";
import fetching from "@services/fetching";

const useFetching = (url, option) => {
  const { data, error, isLoading } = useSWR(url, fetching, option);

  return { data, error, loading: isLoading && !data && !error };
};

export default useFetching;
