import styles from "./Navbar.module.css";
import homeImg from "../images/home.png";
import cartImg from "../images/Cart.png";
import orderImg from "../images/order.png";
import logoutImg from "../images/logout.png";
import menuImg from "../images/menus.png";

function Navbar(props) {
  const { setMenuList } = props;
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <img src="../creativity.png" alt="logo" />
        <h3 className={styles.logoHeading}>Buy Busy</h3>
      </div>
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
    </div>
  );
}

export default Navbar;
