import { useState } from "react";
import MenuList from "./components/MenuList";
import Navbar from "./components/Navbar";

function App() {
  const [menuList, setMenuList] = useState(false);
  return (
    <>
      <Navbar setMenuList={setMenuList} />
      {menuList ? <MenuList setMenuList={setMenuList} /> : null}
    </>
  );
}

export default App;
