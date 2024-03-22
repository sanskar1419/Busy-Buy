import Product from "../Product/Product";
import useFetch from "../../hooks/useFetch";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterMenu from "../FilterMenu/FilterMenu";
import FilterButton from "../FilterButton/FilterButton";

function Products() {
  const { loadProduct, loading, setLoading, products } = useFetch();
  const [nameInput, setNameInput] = useState("");
  const [filterMenu, setFilterMenu] = useState(false);
  const [price, setPrice] = useState(75000);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    loadProduct();
    // setLoading(false);
  }, []);
  //   console.log(products);

  const filterItems = products.filter((p) =>
    p.name.toLocaleLowerCase().includes(nameInput)
  );

  // console.log(filterItems);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    if (e.target.checked === true) {
      setSelectedCategory([...selectedCategory, e.target.value]);
    } else {
      setSelectedCategory((prev) => {
        return prev.filter((p) => p !== e.target.value);
      });
      // setSelectedCategory(selectedCategory);
    }
  };

  useEffect(() => {
    const result = filterItems.filter((p) => {
      if (selectedCategory.length !== 0) {
        // const isPriceLess = p.price <= price ? true : false;
        // const isCategory = selectedCategory.includes(p.type);
        // console.log(1);
        return p.price <= price && selectedCategory.includes(p.type);
      } else {
        // console.log(2);
        return p.price <= price;
      }
    });

    setFilterProducts(result);
  }, [price, selectedCategory.length]);
  // console.log(filterProducts);

  return (
    <>
      {filterMenu ? (
        <FilterMenu
          handleChange={handleChange}
          price={price}
          handleCategoryChange={handleCategoryChange}
        />
      ) : (
        <FilterButton setFilterMenu={setFilterMenu} />
      )}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search By Name ......"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
      </div>
      <div className={styles.productsContainer}>
        {filterProducts.length === 0
          ? filterItems.map((product, index) => (
              <Product key={index} product={product} />
            ))
          : filterProducts.map((product, index) => (
              <Product key={index} product={product} />
            ))}
      </div>
    </>
  );
}

export default Products;
