import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));

  // console.log(loggedInUserData);
  useEffect(() => {
    setLoading(true);
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        // console.log("Current data: ", doc.data());
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

  const removeFromCart = async (productId) => {
    const index = user.cart.findIndex((product) => product.id === productId);
    // console.log(index);
    user.cart.splice(index, 1);
    setUser(user);
    // console.log(user);
    const docRef = doc(db, "Users", loggedInUserData.id);
    await updateDoc(docRef, {
      cart: user.cart,
    });
    toast.success("Item has been Successfully removed");
  };

  const increaseQuantity = async (productId) => {
    const index = user.cart.findIndex((product) => product.id === productId);
    user.cart[index].quantity++;
    setUser(user);
    const docRef = doc(db, "Users", loggedInUserData.id);
    await updateDoc(docRef, {
      cart: user.cart,
    });
    toast.success(
      `Quantity has been increased to ${user.cart[index].quantity}`
    );
  };

  const decreaseQuantity = async (productId) => {
    const index = user.cart.findIndex((product) => product.id === productId);
    if (user.cart[index].quantity > 1) {
      user.cart[index].quantity--;
      setUser(user);
      const docRef = doc(db, "Users", loggedInUserData.id);
      await updateDoc(docRef, {
        cart: user.cart,
      });
      toast.success(
        `Quantity has been decreased to ${user.cart[index].quantity}`
      );
    }
  };

  return {
    loading,
    addToCart,
    user,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useCart;
