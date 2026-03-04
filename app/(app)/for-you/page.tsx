"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import getSelectedBook from "@/api/selected-book";
import getRecommendedBooks from "@/api/recommended-books";
import styles from "./page.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import Carousel from "@/components/ui/Carousel";

type Book = {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
};

export default function dashboard() {
  const { user, loading } = useAuth();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    if (!selectedBook && !recommendedBooks) {
      async function fetchBooks() {
        setSelectedBook(await getSelectedBook());
        setRecommendedBooks(await getRecommendedBooks());
      }
      fetchBooks();
    } else {
      console.log("selected book:", selectedBook);
      console.log("recommended books:", recommendedBooks);
    }
  }, [recommendedBooks]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.forYou}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Selected Just For You</h2>
        <button className={styles.selectedBox}>
          <div className={styles.subTitle}>{selectedBook?.subTitle}</div>
          <div className={styles.bookWrapper}>
            <img src={selectedBook?.imageLink} className={styles.book} alt="" />
          </div>
          <div className={styles.bookMetadata}>
            <div className={styles.title}>{selectedBook?.title}</div>
            <div className={styles.author}>{selectedBook?.author}</div>
            <div className={styles.bookAudio}>
              <div className={styles.iconWrapper}>
                <FaCirclePlay className={styles.icon} />
              </div>
              <div className={styles.audioLength}>3 mins 23 secs</div>
            </div>
          </div>
        </button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recommended For You</h2>
        <h4 className={styles.sectionSubtitle}>We think you'll like these</h4>
        {recommendedBooks && (
          <div style={{ margin: "40px 0" }}>
            <Carousel recommendedBooks={recommendedBooks} />
          </div>
        )}
      </section>
    </div>
  );
}
