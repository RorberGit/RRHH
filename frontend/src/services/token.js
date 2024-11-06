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
