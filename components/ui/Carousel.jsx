"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import Link from "next/link";
import BookDuration from "./BookDuration";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import SlideImg from "./SlideImg";

function Carousel({ Books, subscription, forYouLoading }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      watchDrag: true,
    },
    [WheelGesturesPlugin()],
  );

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {forYouLoading
            ? [...Array(8)].map((_, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.book}>
                    <div className={styles.buttonSkeleton}>
                      <div className={styles.imgSkeleton}></div>

                      <div className={styles.metadata}>
                        <div className={styles.titleSkeleton}></div>
                        <div className={styles.authorSkeleton}></div>
                        <div className={styles.subTitleSkeleton}></div>

                        <div className={styles.bottomInfoSkeleton}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : Books?.map((book) => (
                <div key={book.id} className={styles.slide}>
                  <div className={styles.book}>
                    <Link href={`/book/${book.id}`} className={styles.button}>
                      {book.subscriptionRequired && !subscription && (
                        <div className={styles.pill}>Premium</div>
                      )}

                      <SlideImg src={book.imageLink} alt={book.title} />

                      <div className={styles.metadata}>
                        <div className={styles.title}>{book.title}</div>
                        <div className={styles.author}>{book.author}</div>
                        <div className={styles.subTitle}>{book.subTitle}</div>

                        <div className={styles.bottomInfo}>
                          <figure className={styles.iconWrapper}>
                            <CiClock2
                              className={`${styles.icon} ${styles.clock}`}
                            />
                          </figure>

                          <div className={styles.bottomText}>
                            <BookDuration audioUrl={book.audioLink} />
                          </div>

                          <figure className={styles.iconWrapper}>
                            <FaStar
                              className={`${styles.icon} ${styles.star}`}
                            />
                          </figure>

                          <div className={styles.bottomText}>
                            {book.averageRating}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
