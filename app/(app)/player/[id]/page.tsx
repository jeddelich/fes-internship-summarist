"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import getBookById from "@/api/id-book";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { useAudio } from "@/context/AudioContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

export default function PlayerPage() {
  const [book, setBook] = useState<Book | null>(null);
  const { setAudioUrl } = useAudio();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (book?.audioLink) {
      setAudioUrl(book.audioLink);
    }
    async function fetchInfo() {
      const fetchedBook = await getBookById(id);
      setBook(fetchedBook);
      console.log(fetchedBook);
    }
    fetchInfo();
    setLoading(false);
  }, [book]);

  return (
    <div className={styles.player}>
      <div className={styles.row}>
        {loading ? (
          <figure className={styles.loading}>
            <AiOutlineLoading3Quarters className={styles.loadingIcon} />
          </figure>
        ) : (
          <>
            <h1 className={styles.title}>{book?.title}</h1>
            <hr className={styles.separator} />
            <p className={styles.summary}>{book?.summary}</p>
          </>
        )}
      </div>
      <AudioPlayer
        img={book?.imageLink}
        title={book?.title}
        author={book?.author}
        audio={book?.audioLink}
      />
    </div>
  );
}
