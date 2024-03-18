import { useEffect, useState } from "react";
import MenuList from "../../components/Menulist/MenuList";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import GridLoader from "react-spinners/GridLoader";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";

function Home() {
  const { loading, loadProduct, setLoading } = useFetch();

  useEffect(() => {
    loadProduct();
    // setLoading(false);
  }, []);

  return (
    <div className={styles.homeContainer}>
      {loading ? <GridLoader color="blue" /> : <Products />}
    </div>
  );
}

export default Home;
