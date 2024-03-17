import { useState } from "react";
import { useValues } from "../context/authContext";
import { toast } from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useValues();

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

  return { loading, logOut };
};

export default useLogout;
