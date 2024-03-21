import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useOrder() {
  const [orderLoading, setOrderLoading] = useState(false);
  const [user, setUser] = useState(null);
  const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
  }, []);

  const orderItems = async (cart) => {
    setOrderLoading(true);
    try {
      console.log(cart);
      const docRef = doc(db, "Users", loggedInUserData.id);
      user.orders.push({ items: cart, orderedDate: new Date().toDateString() });
      setUser(user);
      // console.log(user);
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

  return {
    orderItems,
    orderLoading,
  };
}

export default useOrder;
