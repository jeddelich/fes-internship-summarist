import { IoDocumentTextSharp } from "react-icons/io5";
import styles from "./page.module.css";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

function page() {
  return (
    <div className={styles.page}>
      <section className={styles.landing}>
        <h1 className={styles.h1}>
          Get unlimited access to many amazing books to read
        </h1>
        <h2 className={styles.h2}>
          Turn ordinary moments into amazing learning opportunities
        </h2>
        <figure className={styles.imgWrapper}>
          <img
            src="/images/pricing-welcome.svg"
            className={styles.img}
            alt=""
          />
        </figure>
      </section>

      <section className={styles.benefits}>
        <ul className={styles.benefitsList}>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <IoDocumentTextSharp className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>Key ideas in few min</span> with
              many books to read
            </div>
          </li>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <RiPlantFill className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>3 million</span> people growing with
              Summarist everyday
            </div>
          </li>
          <li className={styles.benefit}>
            <figure className={styles.iconWrapper}>
              <FaHandshake className={styles.icon} />
            </figure>
            <div className={styles.benefitDescription}>
              <span className={styles.bold}>Precise recommendations</span>{" "}
               collections curated by experts
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default page;
