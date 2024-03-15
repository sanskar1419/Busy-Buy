import styles from "./MenuList.module.css";
import homeImg from "../images/home.png";
import orderImg from "../images/order.png";
import cartImg from "../images/Cart.png";
import logoutImg from "../images/logout.png";
import crossImg from "../images/delete-button.png";

function MenuList({ setMenuList }) {
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
        <div className={styles.individualButtonContainer}>
          <img src={orderImg} alt="Home" />
          <h4>Orders</h4>
        </div>
        <div className={styles.individualButtonContainer}>
          <img src={cartImg} alt="Home" />
          <h4>Cart</h4>
        </div>
        <div className={styles.individualButtonContainer}>
          <img src={logoutImg} alt="Home" />
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
