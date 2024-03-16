import styles from "./Navbar.module.css";
import logoImg from "../../images/family.png";
import HorizontalMenuList from "../HorizontalMenuList/HorizontalMenuList";
import MenuList from "../Menulist/MenuList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuList, setMenuList] = useState(false);
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

export default Navbar;
