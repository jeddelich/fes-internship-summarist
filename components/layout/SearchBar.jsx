"use client";

import { useState, useRef } from "react";
import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import getSearch from "@/api/search";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import BookDuration from "../ui/BookDuration";
import { SlMenu } from "react-icons/sl";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [failedSearch, setFailedSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const timeoutRef = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    clearTimeout(timeoutRef.current);
    setSearchResults(null);
    setFailedSearch(false);

    if (value !== "") {
      timeoutRef.current = setTimeout(async () => {
        const result = await getSearch(value);

        if (result.length === 0) {
          setFailedSearch(true);
          setSearchResults([]);
        } else {
          setSearchResults(result);
          console.log(result);
        }
      }, 500);
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
      <figure className={`${styles.menuWrapper} ${styles.visible}`}>
        <SlMenu className={styles.icon}></SlMenu>
      </figure>
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
          <div
            className={styles.resultsWrapper}
            style={
              searchResults?.length > 3 ? { paddingRight: "12px" } : undefined
            }
          >
            {searchResults
              ? searchResults.map((result) => {
                  return (
                    <Link
                      href={`/book/${result.id}`}
                      onClick={handleClose}
                      key={result.id}
                      className={styles.result}
                    >
                      <figure className={styles.imageWrapper}>
                        <img
                          src={result.imageLink}
                          className={styles.image}
                          alt=""
                        />
                      </figure>
                      <div className={styles.resultInfo}>
                        <div className={styles.title}>{result.title}</div>
                        <div className={styles.author}>{result.author}</div>
                        <div className={styles.timeWrapper}>
                          <figure className={styles.clockIconWrapper}>
                            <FaRegClock className={styles.clockIcon} />
                          </figure>
                          <div className={styles.time}><BookDuration audioUrl={result.audioLink} /></div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : [...Array(3)].map((skeleton, index) => {
                  return (
                    <div key={index} className={styles.searchSkeleton}></div>
                  );
                })}
            {failedSearch && (
              <div className={styles.searchFailed}>
                No books found matching your search. <br/> Please try again or
                contact us for help!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
