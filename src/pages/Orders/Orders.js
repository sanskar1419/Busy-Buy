// Importing necessary module, component, hooks etc.
import { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import GridLoader from "react-spinners/GridLoader";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseinit";
import Order from "../../components/Order/Order";
import NoOrders from "../../components/NoOrder/NoOrder";

// Defining Orders functional component
function Orders() {
  // Defining useState hook to store user detail
  const [user, setUser] = useState(null);
  // Defining useState hook to store loading status
  const [loading, setLoading] = useState(false);

  // Fetching the user data details from the cloud fire store
  useEffect(() => {
    setLoading(true);
    const loggedInUserData = JSON.parse(localStorage.getItem("logged-in-user"));
    if (loggedInUserData !== null) {
      onSnapshot(doc(db, "Users", loggedInUserData.id), (doc) => {
        setUser({ id: loggedInUserData.id, ...doc.data() });
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Returning the JSX content
  return (
    <div className={styles.mainContainer}>
      {loading ? (
        <GridLoader color="blue" />
      ) : (
        <div className={styles.orderItemsContainer}>
          {user === null ? null : user.orders.length === 0 ? (
            <NoOrders />
          ) : (
            <>
              <h3>Order Details</h3>
              {user.orders.map((order, index) => (
                <Order key={index} order={order} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// Exporting the Orders content
export default Orders;
