"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import getBookById from "@/api/id-book";

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

  const { id } = useParams();

  useEffect(() => {
    async function fetchInfo() {
      const fetchedBook = await getBookById(id);
      setBook(fetchedBook);
      console.log(fetchedBook);
    }
    fetchInfo();
  }, []);

  return (
    <div className={styles.player}>
      <div className={styles.row}>
        <h1 className={styles.title}>{book?.title}</h1>
        <hr className={styles.separator} />
        <p className={styles.summary}>{book?.summary}</p>
      </div>
    </div>
  );
}
