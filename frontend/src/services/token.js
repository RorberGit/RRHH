const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const setToken = (value) => {
  localStorage.setItem("token", JSON.stringify(value));
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export const Token = { getToken, setToken, removeToken };

export const STORAGE = {
  list: () => JSON.parse(localStorage.getItem("token")) || null,
  getId: () => JSON.parse(localStorage.getItem("token"))?.id || null,
  getAccessToken: () => JSON.parse(localStorage.getItem("token"))?.access_token,
  setAccessToken: (accessToken = "") => {
    localStorage.setItem(
      "token",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("token")),
        access_token: accessToken,
      })
    );
  },
  getRefreshToken: () =>
    JSON.parse(localStorage.getItem("token"))?.refresh_token,
  setToken: (value) => localStorage.setItem("token", JSON.stringify(value)),
  delToken: () => localStorage.removeItem("token"),
};
