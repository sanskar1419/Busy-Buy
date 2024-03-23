// Importing necessary module, hooks, images etc.
import styles from "./SearchBar.module.css";
import useFetch from "../../hooks/useFetch";

// Creating SearchBar functional component
function SearchBar() {
  // Destructuring values from useFetch custom hook
  const { nameInput, setNameInput } = useFetch();

  // Returning the JSX Content
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

// Exporting SearchBar component
export default SearchBar;
