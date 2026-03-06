"use client";

import { useState, useRef } from "react";
import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import getSearch from "@/api/search"

function SearchBar() {
  const [search, setSearch] = useState("");
  const [showClose, setShowClose] = useState(false);
  const timeoutRef = useRef(null)

  function handleSearch(e) {
    const value = e.target.value
    clearTimeout(timeoutRef.current)
    
    if (value !== "") {
        timeoutRef.current = setTimeout(async () => {
                const result = await getSearch(value)
                console.log(result)
        }, 1000)
    }
        
    setSearch(value);
    setShowClose(value !== "")
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
