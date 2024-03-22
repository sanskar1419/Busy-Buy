import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../firebaseinit";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // console.log(nameInput);

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
  return {
    loading,
    products,
    loadProduct,
    setLoading,
    setProducts,
  };
};

export default useFetch;
