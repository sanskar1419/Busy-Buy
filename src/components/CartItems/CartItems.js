import CartItem from "../CartItem/CartItem";
import styles from "./CartItems.module.css";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../firebaseinit";

function CartItems() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        // console.log("Current data: ", doc.data());
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
  }, []);

  // console.log(user);
  return (
    <div className={styles.cartItemsContainer}>
      {user === null
        ? null
        : user.cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
    </div>
  );
}

export default CartItems;
