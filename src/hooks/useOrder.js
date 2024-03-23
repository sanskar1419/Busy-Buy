// Importing necessary module, hook etc.
import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Defining useOrder custom hook function
function useOrder() {
  // Using useState hook to define state variables
  const [orderLoading, setOrderLoading] = useState(false);
  const [user, setUser] = useState(null);
  // Getting logged in user data from local storage
  const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));
  const navigate = useNavigate();

  // Getting realtime user data from cloud fire store
  useEffect(() => {
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
  }, []);

  // Function to place order and save the cart data to order
  const orderItems = async (cart) => {
    setOrderLoading(true);
    try {
      const docRef = doc(db, "Users", loggedInUserData.id);
      user.orders.push({ items: cart, orderedDate: new Date().toDateString() });
      setUser(user);
      await updateDoc(docRef, {
        orders: user.orders,
      });
      setTimeout(async () => {
        toast.success("Order Placed Successfully");
        navigate("/order");
        await updateDoc(docRef, {
          cart: [],
        });
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setOrderLoading(false);
      }, 5000);
    }
  };
  // Returning the object of necessary function and state variable
  return {
    orderItems,
    orderLoading,
  };
}

// Exporting useOrder custom hook
export default useOrder;
