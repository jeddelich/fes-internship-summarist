"use client";

import { useState, useRef } from "react";
import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import getSearch from "@/api/search";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const timeoutRef = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    clearTimeout(timeoutRef.current);
    setSearchResults(null)

    if (value !== "") {
      timeoutRef.current = setTimeout(async () => {
        const result = await getSearch(value);
        setSearchResults(result);
      }, 1000);
    }

    setSearch(value);
    setActive(value !== "");
  }

  function handleClose() {
    setSearch("");
    setActive(false);
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
              {!active ? (
                <IoMdSearch className={styles.icon} />
              ) : (
                <IoClose
                  className={`${styles.icon} + " " + ${styles.clickable}`}
                  style={{ cursor: "pointer" }}
                  onClick={handleClose}
                />
              )}
            </figure>
          </div>
        </div>
      </form>
      {active && (
        <div className={styles.searchResults}>
          <div className={styles.resultsWrapper}>
            {searchResults
              ? searchResults.map((result) => {
                  return <div className={styles.result}></div>;
                })
              : [...Array(3)].map((skeleton) => {
                  return <div className={styles.searchSkeleton}></div>;
                })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
