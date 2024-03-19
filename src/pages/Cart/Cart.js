import styles from "./Cart.module.css";
import NoItemInCart from "../../components/NoItemsInCart/NoItemInCart";

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <NoItemInCart />
    </div>
  );
}

export default Cart;
