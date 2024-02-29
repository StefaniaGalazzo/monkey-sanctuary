/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "./auth";

/*create the context to manage user in the entire application thanks to the provider */
let userState;
const User = createContext({ user: null, loading: false });

export const UserProvider = ({ value, children }) => {
  const { user } = value;

  useEffect(() => {
    if (!userState && user) userState = user;
  }, []);

  return <User.Provider value={value}>{children}</User.Provider>;
};

/* grab the user if it exist and create context */
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(User);

// eslint-disable-next-line react-refresh/only-export-components
export const useFetchUser = () => {
  const [data, setUser] = useState({
    user: userState || null,
    loading: userState === undefined,
  });

  useEffect(() => {
    if (userState !== undefined) return;

    let isMounted = true;
    const resolveUser = async () => {
      // from the local cookie - managing in the auth.js
      const user = await getUserFromLocalCookie();
      if (isMounted) setUser({ user, loading: false });
    };
    resolveUser();
    return () => {
      isMounted = false;
    };
  }, []);
  return data;
};
