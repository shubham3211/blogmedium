import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const useUserContext = () => {
  let cont = useContext(Context);
  if (cont === undefined) {
    throw new Error("useUserContext should be used inside UserContext");
  }
  return cont;
};

function UserContext({ children }) {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export { useUserContext, UserContext };
