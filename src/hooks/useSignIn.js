// Importing necessary module, hook etc.
import { useState } from "react";
import { useValues } from "../context/authContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";

// Defining useSignIn custom hook function
const useSignIn = () => {
  // Using useState hook to define state variables
  const [loading, setLoading] = useState(false);
  // Getting value from useValues hook
  const { setIsLoggedIn } = useValues();

  // Function to check the user entered detail and if correct set user id in local storage
  const signIn = async ({ username, password }) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const q = query(
        collection(db, "Users"),
        where("username", "==", username)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let user;
        querySnapshot.forEach((doc) => {
          user = { id: doc.id, ...doc.data() };
        });

        if (user === undefined) {
          toast.error("User doesn't exist 😔😔😔");
          return;
        }
        // console.log(user.password);
        if (user.password !== password) {
          toast.error("Invalid Credentials 😔😔😔");
          return;
        }
        localStorage.setItem(
          "logged-in-user",
          JSON.stringify({ id: user.id, username: user.username })
        );
        setIsLoggedIn({ id: user.id, username: user.username });
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };
  // Returning the object of necessary function and state variable
  return { loading, signIn };
};

// Exporting useSignIn custom hook
export default useSignIn;

// Function to validate user inputs
function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
