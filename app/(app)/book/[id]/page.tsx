"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import getBookById from "@/api/id-book";
import { useParams } from "next/navigation";
import { FaRegLightbulb, FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { PiBookOpenTextLight } from "react-icons/pi";
import { MdOutlineBookmarkAdd } from "react-icons/md";

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

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchBookById() {
      const fetchedBook = await getBookById(id);
      setBook(fetchedBook);
    }
    fetchBookById();
  }, []);

  useEffect(() => {
    console.log(book);
  }, [book]);

  return (
    <div className={styles.bookPage}>
      <div className={styles.row}>
        <div className={styles.bookInfo}>
          <h1 className={styles.title}>{book?.title}</h1>
          <h3 className={styles.author}>{book?.author}</h3>
          <h2 className={styles.subtitle}>{book?.subTitle}</h2>
          <hr className={styles.separator} />
          <div className={styles.featuredInfo}>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}><FaStar /></figure>
              <div
                className={styles.featureText}
              >{`${book?.averageRating} (${book?.totalRating} ratings)`}</div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}><CiClock2 /></figure>
              <div className={styles.featureText}>02:30</div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}><IoMicOutline /></figure>
              <div className={styles.featureText}>{book?.type}</div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.featureIconWrapper}>
                <FaRegLightbulb />
              </figure>
              <div
                className={styles.featureText}
              >{`${book?.keyIdeas} Key ideas`}</div>
            </div>
          </div>
          <hr className={styles.separator} />
          <div className={styles.buttons}>
            <button className={styles.button}>
              <figure className={styles.buttonIconWrapper}><PiBookOpenTextLight /></figure>
              <div className={styles.buttonText}>Read</div>
            </button>
            <button className={styles.button}>
              <figure className={styles.buttonIconWrapper}><IoMicOutline /></figure>
              <div className={styles.buttonText}>Listen</div>
            </button>
          </div>
          <div className={styles.bookmark}>
            <figure className={styles.bookmarkIconWrapper}><MdOutlineBookmarkAdd/></figure>
            <div className={styles.bookmarkText}>Add Title To My Library</div>
          </div>
          <div className={styles.description}>
            <div className={styles.header}>What's it about?</div>
            <div className={styles.tags}>
              {book?.tags.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={styles.para}>{book?.bookDescription}</div>
            <div className={styles.header}>About the author</div>
            <div className={styles.para}>{book?.authorDescription}</div>
          </div>
        </div>
        <figure className={styles.bookWrapper}>
          <img className={styles.book} src={book?.imageLink} alt="" />
        </figure>
      </div>
    </div>
  );
}
