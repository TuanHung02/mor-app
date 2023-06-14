import IconClose from "../Icons/IconClose";
import IconSearch from "../Icons/IconSearch";
import styles from "./Search.module.scss";

function Search({ searchValue, onChange }) {
  const handleCloseSearch = () => {
    console.log("close");
  };

  return (
    <div className={styles.search}>
      <IconSearch />
      <input value={searchValue} placeholder="Search..." onChange={onChange} />
      {!!searchValue && (
        <IconClose
          className={styles.close}
          onClick={handleCloseSearch}
        ></IconClose>
      )}
    </div>
  );
}

export default Search;
