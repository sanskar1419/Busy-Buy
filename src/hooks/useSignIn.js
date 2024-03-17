import { useState } from "react";
import { useValues } from "../context/authContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useValues();

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
        toast.success("Logged In Successfully 😎😎😎");
      });
      //   console.log("fgdfgddgf");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signIn };
};

export default useSignIn;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
