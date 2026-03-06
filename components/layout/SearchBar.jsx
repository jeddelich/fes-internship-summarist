import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <form action="">
        <div className={styles.wrapper}>
          <input
            type="text"
            placeholder="Search for books"
            className={styles.input}
          />
          <div className={styles.button}>
            <figure className={styles.iconWrapper}>
                <IoMdSearch className={styles.icon} />
            </figure>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
