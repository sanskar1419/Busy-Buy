import styles from "./MenuList.module.css";
import homeImg from "../../images/home.png";
import orderImg from "../../images/order.png";
import cartImg from "../../images/Cart.png";
import logoutImg from "../../images/logout.png";
import crossImg from "../../images/delete-button.png";
import logInImg from "../../images/access.png";
import { useValues } from "../../context/authContext";

function MenuList({ setMenuList }) {
  const { isLoggedIn } = useValues();
  return (
    <div className={styles.buttonsContainer}>
      <h3>Menu Items</h3>
      <img
        src={crossImg}
        className={styles.close}
        alt="cross"
        onClick={() => setMenuList(false)}
      />
      <div className={styles.buttons}>
        <div className={styles.individualButtonContainer}>
          <img src={homeImg} alt="Home" />
          <h4>Home</h4>
        </div>
        {isLoggedIn ? (
          <>
            <div className={styles.individualButtonContainer}>
              <img src={orderImg} alt="Orders" />
              <h4>Orders</h4>
            </div>
            <div className={styles.individualButtonContainer}>
              <img src={cartImg} alt="Cart" />
              <h4>Cart</h4>
            </div>
            <div className={styles.individualButtonContainer}>
              <img src={logoutImg} alt="Logout" />
              <h4>Logout</h4>
            </div>
          </>
        ) : (
          <div className={styles.individualButtonContainer}>
            <img src={logInImg} alt="login" />
            <h4>Sign In</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuList;
