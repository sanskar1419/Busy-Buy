// Importing necessary module, hooks, images etc.
import styles from "./Navbar.module.css";
import logoImg from "../../images/family.png";
import HorizontalMenuList from "../HorizontalMenuList/HorizontalMenuList";
import MenuList from "../Menulist/MenuList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// Creating Navbar functional component
function Navbar() {
  // Using useState to define state variable
  const [menuList, setMenuList] = useState(false);
  // Returning the JSX Content
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logoImg} alt="logo" />
          </Link>
          <Link to="/">
            <h3 className={styles.logoHeading}>Buy Busy</h3>
          </Link>
        </div>
        <HorizontalMenuList setMenuList={setMenuList} />
      </div>
      {menuList ? <MenuList setMenuList={setMenuList} /> : null}
      <Outlet />
    </>
  );
}

// Exporting Navbar component
export default Navbar;
