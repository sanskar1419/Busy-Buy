import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder="Search..........." />
    </div>
  );
}

export default SearchBar;
