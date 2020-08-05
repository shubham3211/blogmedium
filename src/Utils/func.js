export const setToken = token => localStorage.setItem("token", token);
export const getToken = () => "Bearer " + localStorage.getItem("token");
