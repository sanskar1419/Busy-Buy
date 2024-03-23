// Importing necessary module, component, hooks etc
import styles from "./Cart.module.css";
import NoItemInCart from "../../components/NoItemsInCart/NoItemInCart";
import useCart from "../../hooks/useCart";
import GridLoader from "react-spinners/GridLoader";
import CartItems from "../../components/CartItems/CartItems";
import { useEffect, useState } from "react";
import useOrder from "../../hooks/useOrder";
import RingLoader from "react-spinners/RingLoader";

// Defining Cart functional component
function Cart() {
  // Destructuring loading state and logged in user data from useCart custom hook
  const { loading, user } = useCart();
  // Destructuring orderItems function and orderLoading state from useOrder custom hook
  const { orderItems, orderLoading } = useOrder();
  // Defining useState hook name priceBreakup to store totals
  const [priceBreakUp, setPriceBreakup] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    totalItem: 0,
    totalMRP: 0,
  });

  // Using useEffect hook to calculate totals on mounting and whenever user data changes
  useEffect(() => {
    // console.log(user);
    if (user !== null) {
      let totalPr = 0;
      let totalDsc = 0;
      let totalMrp = 0;
      user.cart.map((product) => {
        totalPr += product.price * product.quantity;
        totalMrp += product.mrp * product.quantity;
      });
      setPriceBreakup({
        totalPrice: totalPr,
        totalDiscount: totalMrp - totalPr,
        totalItem: user.cart.length,
        totalMRP: totalMrp,
      });
    }
  }, [user]);

  // Returning JSX Content
  return (
    <div className={styles.bodyContainer}>
      {/* If loading state is true show the gridloader */}
      {loading ? (
        <GridLoader color="blue" />
      ) : priceBreakUp.totalItem === 0 ? (
        <NoItemInCart />
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItemsAndPriceContainer}>
            <div className={styles.cartItemsAndOrderContainer}>
              <CartItems />
              <div className={styles.placeButtonContainer}>
                {orderLoading ? (
                  <div className={styles.loaderContainer}>
                    <RingLoader color="blue" />
                  </div>
                ) : (
                  <button onClick={() => orderItems(user.cart)}>
                    PLACE ORDER
                  </button>
                )}
              </div>
            </div>
            <div className={styles.priceBreakUpContainer}>
              <div className={styles.priceDetailsHeader}>
                <p>PRICE DETAILS</p>
              </div>
              <div className={styles.priceContainer}>
                <p>Price ({priceBreakUp.totalItem} Items)</p>
                <p>&#8377; {priceBreakUp.totalMRP}</p>
              </div>
              <div className={styles.priceContainer}>
                <p>Discount</p>
                <p className={styles.textGreen}>
                  - &#8377; {priceBreakUp.totalDiscount}
                </p>
              </div>
              <div className={styles.priceContainer}>
                <p>Delivery Charges</p>
                <p>
                  <span className={styles.delivery}>&#8377;240</span>
                  <span className={styles.textGreen}> Free</span>
                </p>
              </div>
              <div className={styles.totalAmountContainer}>
                <h4>Total Amount</h4>
                <h4>&#8377; {priceBreakUp.totalPrice}</h4>
              </div>
              <div className={styles.priceContainer}>
                <p className={styles.textGreen}>
                  You will save ₹{priceBreakUp.totalDiscount} on this order
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Exporting Cart Component
export default Cart;
