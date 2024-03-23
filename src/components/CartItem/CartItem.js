// Importing necessary module, hooks etc.
import styles from "./CartItem.module.css";
import plusImg from "../../images/plus.png";
import minusImg from "../../images/remove.png";
import starImg from "../../images/star.png";
import useCart from "../../hooks/useCart";

// Creating CartItem functional component
function CartItem({ product }) {
  // Destructuring removeFromCart, increaseQuantity, decreaseQuantity from useCart custom hook
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Returning the JSX Content
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageAndQuantityContainer}>
        <div className={styles.imageContainer}>
          <img src={product.imageURL}></img>
        </div>
        <div className={styles.quantityContainer}>
          <button onClick={() => decreaseQuantity(product.id)}>
            <img src={minusImg} alt="minus" />
          </button>
          <span className={styles.quantity}>{product.quantity}</span>
          <button onClick={() => increaseQuantity(product.id)}>
            <img src={plusImg} alt="plus" />
          </button>
        </div>
      </div>
      <div className={styles.productDetailContainer}>
        <div className={styles.brandContainer}>
          <span>{product.brand}</span>
        </div>
        <div className={styles.productNameContainer}>
          <span>{product.name}</span>
        </div>
        <div className={styles.itemPriceContainer}>
          <span>&#8377; {product.price * product.quantity}</span>
        </div>
        <div className={styles.mainPriceContainer}>
          MRP{" "}
          <span className={styles.mrp}>
            &#8377; {product.mrp * product.quantity}
          </span>{" "}
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
        <div className={styles.removeItem}>
          <button onClick={() => removeFromCart(product.id)}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporting CartItem component
export default CartItem;
