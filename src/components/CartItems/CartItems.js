// Importing necessary module, hooks etc.
import CartItem from "../CartItem/CartItem";
import styles from "./CartItems.module.css";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseinit";

// Creating CartItems functional component
function CartItems() {
  // Using useState to define state variable
  const [user, setUser] = useState(null);

  // Getting the user data from the cloud fire store on component mounting
  useEffect(() => {
    const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
  }, []);

  // Returning the JSX Content
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

// Exporting CartItems component
export default CartItems;
