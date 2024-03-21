import styles from "./SearchBar.module.css";
import useFetch from "../../hooks/useFetch";

function SearchBar() {
  const { nameInput, setNameInput } = useFetch();

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search By Name ......"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
