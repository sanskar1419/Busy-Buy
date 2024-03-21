import { useEffect, useState } from "react";
import useOrder from "../../hooks/useOrder";
import styles from "./Orders.module.css";
import GridLoader from "react-spinners/GridLoader";
import { doc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../firebaseinit";
import Order from "../../components/Order/Order";
import NoOrders from "../../components/NoOrder/NoOrder";

function Orders() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
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
  // console.log(user);
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

export default Orders;
