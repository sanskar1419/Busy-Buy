// Importing necessary module, hook etc.
import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseinit";
import { toast } from "react-hot-toast";

// Creating custom hook function name useCart
const useCart = () => {
  // Using useState hook to define state variable
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // Getting logged in user data from local storage
  const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));

  // Getting realtime user data from cloud fire store based on the logged in Id
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

  // Function to add the product to the cart array inside user data
  const addToCart = async (product) => {
    setLoading(true);
    try {
      // 1. Getting user reference
      const docRef = doc(db, "Users", loggedInUserData.id);
      // 2. If cart is empty directly push the product in cart
      if (user.cart.length === 0) {
        user.cart.push({ ...product, quantity: 1 });
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        return;
      }

      // 2. Checking weather product exist or not
      const productIndex = user.cart.findIndex((p) => p.id === product.id);

      // 3. If product doesn't exist, directly push the element in cart array
      if (productIndex === -1) {
        user.cart.push({ ...product, quantity: 1 });
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        return;
      }
      // If the product exist increase the Quantity
      else {
        user.cart[productIndex].quantity++;
        await updateDoc(docRef, {
          cart: user.cart,
        });
        toast.success("Product Added To Cart");
        return;
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // Function to remove the element from cart
  const removeFromCart = async (productId) => {
    const index = user.cart.findIndex((product) => product.id === productId);
    user.cart.splice(index, 1);
    setUser(user);
    const docRef = doc(db, "Users", loggedInUserData.id);
    await updateDoc(docRef, {
      cart: user.cart,
    });
    toast.success("Item has been Successfully removed");
  };

  // Function to increase the quantity by one
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

  // Function to decrease the quantity by 1
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

  // Returning necessary function and state
  return {
    loading,
    addToCart,
    user,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
};

// Exporting useCart Hook
export default useCart;
