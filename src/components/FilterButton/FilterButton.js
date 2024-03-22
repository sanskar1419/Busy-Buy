import styles from "./FilterButton.module.css";

function FilterButton({ setFilterMenu }) {
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

export default FilterButton;
