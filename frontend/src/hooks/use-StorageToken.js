import { useMemo } from "react";

export default function useStorageToken() {
  const action = useMemo(
    () => ({
      list: JSON.parse(localStorage.getItem("token")),
      id: JSON.parse(localStorage.getItem("token"))?.id,
      accessToken: JSON.parse(localStorage.getItem("token"))?.access_token,
      refreshToken: JSON.parse(localStorage.getItem("token"))?.refresh_token,
      setToken: (json = {}) =>
        localStorage.setItem("token", JSON.stringify(json)),
      setAccessToken: (accessToken = "") => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("token")),
            access_token: accessToken,
          })
        );
      },
      remove: () => localStorage.removeItem("token"),
    }),
    []
  );

  return action;
}
