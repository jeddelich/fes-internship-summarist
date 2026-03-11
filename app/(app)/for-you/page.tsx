"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useLayoutEffect, useState } from "react";
import getSelectedBook from "@/api/selected-book";
import getRecommendedBooks from "@/api/recommended-books";
import getSuggestedBooks from "@/api/suggested-books";
import styles from "./page.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import Carousel from "@/components/ui/Carousel";
import { getUserSubscription } from "@/services/firebaseFirestore";
import Link from "next/link";
import { useAudio } from "@/context/AudioContext";
import { formatTime } from "@/utils/formatTime";
import BookDuration from "@/components/ui/BookDuration";
import BookImg from "@/components/ui/BookImg"

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
  const { user } = useAuth();
  const { duration } = useAudio()
  const [subscription, setSubscription] = useState<any>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[] | null>(null);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[] | null>(null);
  const [forYouLoading, setForYouLoading] = useState<Boolean>(true)

  useEffect(() => {
    setForYouLoading(true)
    async function fetchBooks() {
      const sub = await getUserSubscription(user?.uid);
      setSubscription(sub);
      setSelectedBook(await getSelectedBook());
      setRecommendedBooks(await getRecommendedBooks());
      setSuggestedBooks(await getSuggestedBooks());
      setForYouLoading(false)
    }
    fetchBooks();
  }, [user, setSuggestedBooks]);

  return (
    <div className={styles.forYou}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Selected Just For You</h2>
        {
          forYouLoading ? <div className={styles.selectedBookSkeleton}></div> : 
        <Link href={`/book/${selectedBook?.id}`} className={styles.selectedBox}>
          <div className={styles.subTitle}>{selectedBook?.subTitle}</div>
          {
            forYouLoading ? <div className={styles.bookWrapperSkeleton}></div> :
            < BookImg src={selectedBook?.imageLink} />
          }
          <div className={styles.bookMetadata}>
            <div className={styles.title}>{selectedBook?.title}</div>
            <div className={styles.author}>{selectedBook?.author}</div>
            <div className={styles.bookAudio}>
              <div className={styles.iconWrapper}>
                <FaCirclePlay className={styles.icon} />
              </div>
              <div className={styles.audioLength}>Listen (< BookDuration audioUrl={selectedBook?.audioLink} />)</div>
            </div>
          </div>
        </Link>
        }
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recommended For You</h2>
        <h4 className={styles.sectionSubtitle}>We think you'll like these</h4>
          <div style={{ margin: "20px 0" }}>
            <Carousel Books={recommendedBooks} subscription={subscription} forYouLoading={forYouLoading} />
          </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Suggested Books</h2>
        <h4 className={styles.sectionSubtitle}>Browse those books</h4>
          <div style={{ margin: "16px 0" }}>
            <Carousel Books={suggestedBooks} subscription={subscription} forYouLoading={forYouLoading}/>
          </div>
      </section>
    </div>
  );
}
