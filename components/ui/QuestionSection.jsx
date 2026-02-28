import { BsChevronDown } from "react-icons/bs";
import styles from "./QuestionSection.module.css"

function QuestionSection({question, answer, index, toggleQuestion, questionOpen}) {
  return (
    <li className={styles.questionSection}>
      <button
        className={styles.clickableArea}
        onClick={() => toggleQuestion(index)}
      >
        <h5 className={styles.question}>{question}</h5>
        <figure className={styles.arrowWrapper}>
          <BsChevronDown
            className={
              questionOpen === index
                ? `${styles.arrow} + ${styles.arrowUp}`
                : styles.arrow
            }
          />
        </figure>
      </button>
      <div
        className={
          questionOpen === index
            ? `${styles.answer} + ${styles.answerVisible}`
            : styles.answer
        }
      >
        {answer}
      </div>
      <hr className={styles.questionSeparator} />
    </li>
  );
}

export default QuestionSection;
