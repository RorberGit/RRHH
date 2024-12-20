import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQueryParams() {
  const { search } = useLocation();

  return useMemo(() => {
    if (!search) return null;
    const query = new URLSearchParams(search);
    const entries = Array.from(query.entries());
    return entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }, [search]);
}
