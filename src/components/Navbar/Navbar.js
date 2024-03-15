import styles from "./Navbar.module.css";
import logoImg from "../../images/family.png";
import HorizontalMenuList from "../HorizontalMenuList/HorizontalMenuList";
import MenuList from "../Menulist/MenuList";
import { useState } from "react";

function Navbar() {
  const [menuList, setMenuList] = useState(false);
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="logo" />
          <h3 className={styles.logoHeading}>Buy Busy</h3>
        </div>
        <HorizontalMenuList setMenuList={setMenuList} />
      </div>
      {menuList ? <MenuList setMenuList={setMenuList} /> : null}
    </>
  );
}

export default Navbar;
