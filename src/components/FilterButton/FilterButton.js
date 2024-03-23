// Importing Styles
import styles from "./FilterButton.module.css";

// Creating FilterButton functional component
function FilterButton({ setFilterMenu }) {
  // Returning the JSX Content
  return (
    <div
      className={styles.filterMenuContainer}
      onClick={() => {
        setFilterMenu(true);
      }}
    >
      <h3>Filter Products</h3>
    </div>
  );
}

// Exporting FilterButton component
export default FilterButton;
