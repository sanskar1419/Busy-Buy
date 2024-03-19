import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder="Search By Name ......" />
    </div>
  );
}

export default SearchBar;
