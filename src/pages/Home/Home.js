// Importing necessary module, component etc.
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import GridLoader from "react-spinners/GridLoader";
import styles from "./Home.module.css";
import Products from "../../components/Products/Products";

// Defining functional component
function Home() {
  // Importing loading state and loadProduct function from useFetch custom hook
  const { loading, loadProduct } = useFetch();

  // Performing Side-effect : Loading all the product on component mounting
  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* If the state of loading the product from cloud firestore in process the it will show Gridloader otherwise Products component */}
      {loading ? <GridLoader color="blue" /> : <Products />}
    </div>
  );
}

// Exporting Home Component
export default Home;
