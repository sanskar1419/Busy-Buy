// Importing necessary module, hooks, images etc.
import homeImg from "../../images/home.png";
import cartImg from "../../images/Cart.png";
import orderImg from "../../images/order.png";
import logoutImg from "../../images/logout.png";
import menuImg from "../../images/menus.png";
import logInImg from "../../images/access.png";
import styles from "./HorizontalMenuList.module.css";
import { useValues } from "../../context/authContext";
import { NavLink } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import useLogout from "../../hooks/useLogout";

// Creating HorizontalMenuList functional component
function HorizontalMenuList({ setMenuList }) {
  // Destructuring values from use value and useLogout custom hook
  const { isLoggedIn } = useValues();
  const { loading, logOut } = useLogout();

  // Returning the JSX Content
  return (
    <>
      <div className={styles.buttonsContainer}>
        <div className={styles.individualButtonContainer}>
          <img src={homeImg} alt="Home" />
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          >
            <h4>Home</h4>
          </NavLink>
        </div>
        {isLoggedIn ? (
          <>
            <div className={styles.individualButtonContainer}>
              <img src={orderImg} alt="Orders" />
              <NavLink
                to="/order"
                style={({ isActive }) =>
                  isActive ? { color: "blue" } : undefined
                }
              >
                <h4>Orders</h4>
              </NavLink>
            </div>
            <div className={styles.individualButtonContainer}>
              <img src={cartImg} alt="Cart" />
              <NavLink
                to="cart"
                style={({ isActive }) =>
                  isActive ? { color: "blue" } : undefined
                }
              >
                <h4>Cart</h4>
              </NavLink>
            </div>
            <div className={styles.individualButtonContainer} onClick={logOut}>
              <img src={logoutImg} alt="Logout" />
              {loading ? <RingLoader color="#36d7b7" /> : <h4>Logout</h4>}
            </div>
          </>
        ) : (
          <div className={styles.individualButtonContainer}>
            <img src={logInImg} alt="login" />
            <NavLink
              to="signIn"
              style={({ isActive }) =>
                isActive ? { color: "blue" } : undefined
              }
            >
              <h4>Sign In</h4>
            </NavLink>
          </div>
        )}
      </div>
      <div className={styles.menuLogoContainer}>
        <img src={menuImg} alt="menu" onClick={() => setMenuList(true)} />
      </div>
    </>
  );
}

// Exporting HorizontalMenuList component
export default HorizontalMenuList;
