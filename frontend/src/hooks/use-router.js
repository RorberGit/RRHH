import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href) => navigate(href),
      replace: (href) => navigate(href, { replace: true }),
      location: (href) =>
        navigate(href, { state: { from: location }, replace: true }),
    }),
    [location, navigate]
  );

  return router;
}
