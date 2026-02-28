import styles from "./Benefit.module.css"

function Benefit({icon, boldText, normalText}) {
  return (
    <li className={styles.benefit}>
      <figure className={styles.iconWrapper}>
        {icon}
      </figure>
      <div className={styles.benefitDescription}>
        <span className={styles.bold}>{boldText}</span>{normalText}
      </div>
    </li>
  );
}

export default Benefit;
