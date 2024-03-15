import homeImg from "../../images/home.png";
import cartImg from "../../images/Cart.png";
import orderImg from "../../images/order.png";
import logoutImg from "../../images/logout.png";
import menuImg from "../../images/menus.png";
import styles from "./HorizontalMenuList.module.css";

function HorizontalMenuList({ setMenuList }) {
  return (
    <>
      <div className={styles.buttonsContainer}>
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
      <div className={styles.menuLogoContainer}>
        <img src={menuImg} alt="menu" onClick={() => setMenuList(true)} />
      </div>
    </>
  );
}

export default HorizontalMenuList;
