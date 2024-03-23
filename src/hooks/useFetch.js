// Importing necessary module, hook etc.
import { useState } from "react";
import { toast } from "react-hot-toast";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseinit";

// Defining useFetch custom hook function
const useFetch = () => {
  // Using useState hook to define state variables
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Function to load all the product from cloud fire store
  const loadProduct = async () => {
    try {
      onSnapshot(collection(db, "Products"), (snapShot) => {
        const products = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setProducts(products);
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  // Returning the object of necessary function and state variable
  return {
    loading,
    products,
    loadProduct,
    setLoading,
    setProducts,
  };
};

// Exporting useFetch custom hook
export default useFetch;
