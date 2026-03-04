import Slider from "react-slick";
import { carouselSettings } from "./carouselSettings";
import { useEffect, useState, useRef } from "react";
import styles from "./Carousel.module.css"

function Carousel({ recommendedBooks }) {

const sliderRef = useRef(null)
const sliderWrapperRef = useRef(null);
const [mounted, setMounted] = useState(false)

useEffect(() => {
 setMounted(true)
}, [])

const handleWheel = (e) => {
  const track = sliderWrapperRef.current?.querySelector(".slick-track")
  if (!track) return

  e.preventDefault()

  const matrix = new DOMMatrix(getComputedStyle(track).transform)
  const currentX = matrix.m41

  const nextX = currentX - e.deltaX

  const list = sliderWrapperRef.current.querySelector(".slick-list")
  const maxScroll =
    track.scrollWidth - list.clientWidth

  const clampedX = Math.max(-maxScroll, Math.min(0, nextX))

  track.style.transition = "transform 0s"
  track.style.transform = `translate3d(${clampedX}px,0,0)`
}

if (!mounted) return null

  return (
    <div ref={sliderWrapperRef} onWheel={handleWheel}>
    <Slider ref={sliderRef} {...carouselSettings}>
      {recommendedBooks?.map((book) => (
        <div key={book.id} className={styles.book}>
          <div >
            <div>
                <img
                  src={book.imageLink}
                />
            </div>
            <div className={styles.metadata}>
            <div className={styles.title}>{book.title}</div>
            <div className={styles.author}>{book.author}</div>
            <div className={styles.subTitle}>{book.subTitle}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default Carousel;
