// Importing necessary module, hook etc.
import { useState } from "react";
import { useValues } from "../context/authContext";
import { toast } from "react-hot-toast";

// Defining useLogout custom hook function
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useValues();

  // Function to remove the user id from from the local storage
  const logOut = () => {
    setLoading(true);
    try {
      localStorage.removeItem("logged-in-user");
      setIsLoggedIn(null);
      toast.success("Logged Out Successfully 😔😔😔");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Returning the object of necessary function and state variable
  return { loading, logOut };
};

// Exporting useFetch custom hook
export default useLogout;
