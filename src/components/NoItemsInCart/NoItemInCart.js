import emptyCartImg from "../../images/empty-cart.png";
import styles from "./NoItemInCart.module.css";
import { useNavigate } from "react-router-dom";

function NoItemInCart() {
  const navigate = useNavigate();
  return (
    <div className={styles.emptyCartContainer}>
      <img src={emptyCartImg} alt="empty cart" loading="lazy" />
      <div className={styles.emptyText}>Your cart is empty!</div>
      <div>Add items to it now.</div>
      <button
        className={styles.btnAdd}
        onClick={() => {
          navigate("/");
        }}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default NoItemInCart;
