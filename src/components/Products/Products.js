import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";
import styles from "./Products.module.css";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

function Products() {
  const { loadProduct, loading, setLoading, products } = useFetch();

  useEffect(() => {
    loadProduct();
    // setLoading(false);
  }, []);
  //   console.log(products);
  return (
    <>
      <SearchBar />
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
