import { useEffect, useState } from "react";
import emptyCartImg from "../../images/noOrder.png";
import styles from "./NoOrder.module.css";
import { useNavigate } from "react-router-dom";

function NoOrders() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className={styles.emptyCartContainer}>
      <img src={emptyCartImg} alt="empty order" loading="lazy" />
      <div className={styles.emptyText}>No Items has been Ordered Yet</div>
      <div>See you soon with orders</div>
      <button
        className={styles.btnAdd}
        onClick={() => {
          navigate("/");
        }}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default NoOrders;
