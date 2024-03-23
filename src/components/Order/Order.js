// Importing Styles
import styles from "./Order.module.css";

// Creating Order functional component
function Order({ order }) {
  // Destructuring order
  const { orderedDate, items } = order;

  // Returning the JSX Content
  return (
    <div className={styles.individualOrderContainer}>
      <div className={styles.orderDateContainer}>
        Ordered Date : {orderedDate}
      </div>
      <div className={styles.itemsAndTotalContainer}>
        {items.map((item) => (
          <div className={styles.itemsContainer}>
            <div className={styles.imageContainer}>
              <img src={item.imageURL} alt="Item" />
            </div>
            <div className={styles.nameContainer}>{item.name}</div>
            <div className={styles.priceContainer}> &#8377;{item.price}</div>
            <div className={styles.quantityContainer}>X{item.quantity}</div>
            <div className={styles.totalContainer}>
              &#8377;{item.quantity * item.price}
            </div>
          </div>
        ))}
        <div className={styles.totalOrderValueContainer}>
          <div className={styles.totalValue}>
            <h4>Total Ordered Value</h4>
            <h4>&#8377; 150000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting Order component
export default Order;
