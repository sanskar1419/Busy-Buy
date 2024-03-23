// Importing necessary hooks and context from react
import { createContext, useContext, useState } from "react";

// Creating Instance
const authContext = createContext();

// DEFINING CUSTOM HOOKS
function useValues() {
  const value = useContext(authContext);
  return value;
}

// DEFINING CUSTOM PROVIDER
function CustomAuthContext({ children }) {
  // Defining state and fetching data from local storage if user is already signed in
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

// Exporting Value
export { authContext, useValues };
export default CustomAuthContext;
