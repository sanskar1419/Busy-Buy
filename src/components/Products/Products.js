import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

function Products() {
  const { loadProduct, loading, setLoading, products } = useFetch();
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    loadProduct();
    // setLoading(false);
  }, []);
  //   console.log(products);

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search By Name ......"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
      <div className={styles.productsContainer}>
        {products
          .filter((p) => p.name.toLocaleLowerCase().includes(nameInput))
          .map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </>
  );
}

export default Products;
