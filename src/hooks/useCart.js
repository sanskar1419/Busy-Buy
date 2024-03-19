import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));

  // console.log(loggedInUserData);
  useEffect(() => {
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        // console.log("Current data: ", doc.data());
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
  }, []);

  const addToCart = async (product) => {
    setLoading(true);
    try {
      const docRef = doc(db, "Users", loggedInUserData.id);
      if (user.cart.length === 0) {
        user.cart.push({ ...product, quantity: 1 });
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        // console.log(user);
        return;
      }

      const productIndex = user.cart.findIndex((p) => p.id === product.id);

      if (productIndex === -1) {
        user.cart.push({ ...product, quantity: 1 });
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        // console.log(user);
        return;
      } else {
        user.cart[productIndex].quantity++;
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        // console.log(user);
        return;
      }
      // console.log(isProductInCart);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  return { loading, addToCart, user };
};

export default useCart;
