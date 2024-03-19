import styles from "./Product.module.css";
import starImg from "../../images/star.png";
import bagImg from "../../images/shopping.png";
// import LazyLoad from "react-lazy-load";
import useCart from "../../hooks/useCart";
import { PropagateLoader } from "react-spinners";
import { useValues } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { loading, addToCart } = useCart();
  const { isLoggedIn } = useValues();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    isLoggedIn ? addToCart(product) : navigate("/signIn");
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img src={product.imageURL} alt="product" loading="lazy" />
      </div>
      <div className={styles.brandContainer}>
        <span>{product.brand}</span>
      </div>
      <div className={styles.productNameContainer}>
        <span>{product.name}</span>
      </div>
      <div className={styles.itemPriceContainer}>
        <span>&#8377; {product.price}</span>
      </div>
      <div className={styles.mainPriceContainer}>
        MRP <span className={styles.mrp}>&#8377; {product.mrp}</span>{" "}
        <span className={styles.discount}>
          ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
          OFF)
        </span>
      </div>
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingValue}>
          <span>{product.rating}</span>
          <img src={starImg} alt="star" />
        </div>
        <div>Ratings</div>
      </div>
      <div className={styles.loader}>
        {loading ? (
          <PropagateLoader
            color="rgb(102, 102, 240)"
            style={{ marginBottom: "15px" }}
          />
        ) : (
          <button className={styles.btnAdd} onClick={handleAddToCart}>
            <img src={bagImg} alt="bag" /> ADD TO BAG
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
