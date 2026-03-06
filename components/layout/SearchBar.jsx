"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [showClose, setShowClose] = useState(false);

  function handleSearch(e) {
    const value = e.target.value
    
    setSearch(value);
    if (value === "" ) {
      setShowClose(false);
    } else if (value !== "" && !showClose) {
      setShowClose(true);
    }
  }

  function handleClose() {
    setSearch("")
    setShowClose(false)
  }

  return (
    <div className={styles.searchBar}>
      <form action="">
        <div className={styles.wrapper}>
          <input
            type="text"
            placeholder="Search for books"
            className={styles.input}
            value={search}
            onChange={handleSearch}
          />
          <div className={styles.button}>
            <figure className={styles.iconWrapper}>
              {!showClose ? (
                <IoMdSearch className={styles.icon} />
              ) : (
                <IoClose className={`${styles.icon} + " " + ${styles.clickable}`} style={{cursor: "pointer"}} onClick={handleClose} />
              )}
            </figure>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
