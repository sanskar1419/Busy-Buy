import styles from "./Cart.module.css";
import NoItemInCart from "../../components/NoItemsInCart/NoItemInCart";
import useCart from "../../hooks/useCart";
import GridLoader from "react-spinners/GridLoader";
import CartItems from "../../components/CartItems/CartItems";

function Cart() {
  const { loading, user } = useCart();
  return (
    <div className={styles.bodyContainer}>
      {loading ? (
        <GridLoader color="blue" />
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartItemsAndPriceContainer}>
            <div className={styles.cartItemsAndOrderContainer}>
              <CartItems />
              <div className={styles.placeButtonContainer}>
                <button>PLACE ORDER</button>
              </div>
            </div>
            <div className={styles.priceBreakUpContainer}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
