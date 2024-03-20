import styles from "./Cart.module.css";
import NoItemInCart from "../../components/NoItemsInCart/NoItemInCart";
import useCart from "../../hooks/useCart";
import GridLoader from "react-spinners/GridLoader";
import CartItems from "../../components/CartItems/CartItems";
import { useEffect, useState } from "react";

function Cart() {
  const { loading, user } = useCart();
  const [priceBreakUp, setPriceBreakup] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    totalItem: 0,
    totalMRP: 0,
  });

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

  // console.log(priceBreakUp);
  return (
    <div className={styles.bodyContainer}>
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
                <button>PLACE ORDER</button>
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
                <h4></h4>
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

export default Cart;
