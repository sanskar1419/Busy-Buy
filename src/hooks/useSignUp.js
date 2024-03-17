import { useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebaseinit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useValues } from "../context/authContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useValues();

  const signup = async ({ username, password, confirmPassword }) => {
    const success = handleInputError({ username, password, confirmPassword });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const users = [];
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        users.push({ id: doc.id, ...doc.data() });
      });
      const user = users.filter((u) => u.username === username);
      if (user.length >= 1) {
        toast.error("User Already Exist 😍😍😍");
        return;
      }
      const docRef = await addDoc(collection(db, "Users"), {
        username,
        password,
        createdAt: new Date(),
      });

      localStorage.setItem(
        "logged-in-user",
        JSON.stringify({ id: docRef.id, username })
      );
      setIsLoggedIn({ id: docRef, username });
      toast.success("Sign Up Successfully 😎😎😎");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputError({ username, password, confirmPassword }) {
  var passwordExpression =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
  if (!username || !confirmPassword || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (!passwordExpression.test(password)) {
    toast.error(
      "Password should contain min 7 letter password, with at least a symbol, upper and lower case letters and a number"
    );
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 7) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
