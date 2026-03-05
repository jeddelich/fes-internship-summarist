import Slider from "react-slick";
import { carouselSettings } from "./carouselSettings";
import { useEffect, useState, useRef } from "react";
import styles from "./Carousel.module.css";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

function Carousel({ Books, subscription }) {
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return;
    }

    const track = sliderWrapperRef.current?.querySelector(".slick-track");
    if (!track) return;

    e.preventDefault();

    const transform = getComputedStyle(track).transform;
    const matrix = new DOMMatrix(transform === "none" ? undefined : transform);

    const currentX = matrix.m41;
    const nextX = currentX - e.deltaX;

    const list = sliderWrapperRef.current.querySelector(".slick-list");
    const maxScroll = track.scrollWidth - list.clientWidth;

    const clampedX = Math.max(-maxScroll, Math.min(0, nextX));

    track.style.transition = "transform 0s";
    track.style.transform = `translate3d(${clampedX}px,0,0)`;
  };

  useEffect(() => {
    const el = sliderWrapperRef.current;

    if (!el) return;

    const wheelHandler = (e) => {
      handleWheel(e);
    };

    el.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      el.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={sliderWrapperRef}>
      <Slider ref={sliderRef} {...carouselSettings}>
        {Books?.map((book) => (
          <div key={book.id} className={styles.book}>
            <button className={styles.button}>
              {book.subscriptionRequired && !subscription && (
                <div className={styles.pill}>Premium</div>
              )}
              <div>
                <img src={book.imageLink} />
              </div>
              <div className={styles.metadata}>
                <div className={styles.title}>{book.title}</div>
                <div className={styles.author}>{book.author}</div>
                <div className={styles.subTitle}>{book.subTitle}</div>
                <div className={styles.bottomInfo}>
                  <figure className={styles.iconWrapper}>
                    <CiClock2
                      className={`${styles.icon}` + " " + `${styles.clock}`}
                    />
                  </figure>
                  <div className={styles.bottomText}>02:30</div>
                  <figure className={styles.iconWrapper}>
                    <FaStar
                      className={`${styles.icon}` + " " + `${styles.star}`}
                    />
                  </figure>
                  <div className={styles.bottomText}>{book.averageRating}</div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
