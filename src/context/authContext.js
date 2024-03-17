import { createContext, useContext, useState } from "react";

const authContext = createContext();

// DEFINING CUSTOM HOOKS
function useValues() {
  const value = useContext(authContext);
  return value;
}

// DEFINING CUSTOM PROVIDER
function CustomAuthContext({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged-in-user")) || null
  );

  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { authContext, useValues };
export default CustomAuthContext;
