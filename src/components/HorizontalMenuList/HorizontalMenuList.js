import homeImg from "../../images/home.png";
import cartImg from "../../images/Cart.png";
import orderImg from "../../images/order.png";
import logoutImg from "../../images/logout.png";
import menuImg from "../../images/menus.png";
import logInImg from "../../images/access.png";
import styles from "./HorizontalMenuList.module.css";
import { useValues } from "../../context/authContext";

function HorizontalMenuList({ setMenuList }) {
  const { isLoggedIn } = useValues();
  return (
    <>
      <div className={styles.buttonsContainer}>
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
      <div className={styles.menuLogoContainer}>
        <img src={menuImg} alt="menu" onClick={() => setMenuList(true)} />
      </div>
    </>
  );
}

export default HorizontalMenuList;
