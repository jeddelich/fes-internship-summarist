"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import getBookById from "@/api/id-book";
import { useParams, useRouter } from "next/navigation";
import { FaRegLightbulb, FaStar } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";
import { MdOutlineBookmark, MdOutlineBookmarkAdd } from "react-icons/md";
import { FaMicrophoneLines, FaRegClock } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";
import useAuthModal from "@/components/hooks/useAuthModal";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ResetPasswordModal from "@/components/auth/ResetPasswordModal";
import { getUserSubscription } from "@/services/firebaseFirestore";
import BookDuration from "@/components/ui/BookDuration";

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
  const { user } = useAuth();
  const router = useRouter()
  const { openLogin, activeModal, closeModal, openSignUp, openResetPassword } =
    useAuthModal();

  const [book, setBook] = useState<Book | null>(null);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<any>(null);

  function handleButton(event: React.MouseEvent) {
    if (!user) {
      openLogin(event)
    } else if (book?.subscriptionRequired === true && !subscription) {
      router.push("/choose-plan")
    } else {
      router.push(`/player/${book?.id}`)
    }
  }

  useEffect(() => {
    async function fetchInfo() {
      const fetchedBook = await getBookById(id);
      setBook(fetchedBook);

      if (user?.uid) {
        const sub = await getUserSubscription(user?.uid);
        setSubscription(sub);
      }
    }
    fetchInfo();
  }, [id, user]);

  useEffect(() => {
    console.log(book);
  }, [book]);

  return (
    <div className={styles.bookPage}>
      {activeModal === "login" && (
        <LoginModal
          closeModal={closeModal}
          openSignUp={openSignUp}
          openResetPassword={openResetPassword}
          activeModal={activeModal}
        />
      )}
      {activeModal === "signup" && (
        <SignUpModal
          closeModal={closeModal}
          openLogin={openLogin}
          activeModal={activeModal}
        />
      )}
      {activeModal === "reset" && (
        <ResetPasswordModal
          closeModal={closeModal}
          openLogin={openLogin}
          activeModal={activeModal}
        />
      )}
      <div className={styles.row}>
        <div className={styles.bookInfo}>
          <h1 className={styles.title}>{book?.title}</h1>
          <h3 className={styles.author}>{book?.author}</h3>
          <h2 className={styles.subtitle}>{book?.subTitle}</h2>
          <hr className={styles.separator} />
          <div className={styles.featuredInfo}>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>
                <FaStar className={`${styles.icon} + " " + ${styles.gold}`} />
              </figure>
              <div
                className={styles.featureText}
              >{`${book?.averageRating} (${book?.totalRating} ratings)`}</div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>
                <FaRegClock className={`${styles.icon} + " " + ${styles}`} />
              </figure>
              <div className={styles.featureText}><BookDuration audioUrl={book?.audioLink} /></div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>
                <FaMicrophoneLines className={`${styles.icon} + " " + ${styles}`} />
              </figure>
              <div className={styles.featureText}>{book?.type}</div>
            </div>
            <div className={styles.featureWrapper}>
              <figure className={styles.iconWrapper}>
                <FaRegLightbulb
                  className={`${styles.icon} + " " + ${styles.orange}`}
                />
              </figure>
              <div
                className={styles.featureText}
              >{`${book?.keyIdeas} Key ideas`}</div>
            </div>
          </div>
          <hr className={styles.separator} />
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleButton}>
              <figure className={styles.buttonIconWrapper}>
                <PiBookOpenTextLight className={styles.icon} />
              </figure>
              <div className={styles.buttonText}>Read</div>
            </button>
            <button className={styles.button} onClick={handleButton}>
              <figure className={styles.buttonIconWrapper}>
                <FaMicrophoneLines className={styles.icon} />
              </figure>
              <div className={styles.buttonText}>Listen</div>
            </button>
          </div>
          <a className={styles.bookmark} onClick={() => setBookmark(!bookmark)}>
            <figure className={styles.bookmarkIconWrapper}>
              {!bookmark ? (
                <MdOutlineBookmarkAdd className={styles.icon} />
              ) : (
                <MdOutlineBookmark className={styles.icon} />
              )}
            </figure>
            <div className={styles.bookmarkText}>Add Title To My Library</div>
          </a>
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
