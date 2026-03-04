import styles from "./FooterList.module.css"

function FooterList({ title, item1, item2, item3, item4}) {
  return (
    <ul className={styles.footerList}>
      <h3 className={styles.h3}>{title}</h3>
      <li className={styles.footerListItem}>
        <a className={styles.footerLink}>{item1}</a>
      </li>
      <li className={styles.footerListItem}>
        <a className={styles.footerLink}>{item2}</a>
      </li>
      <li className={styles.footerListItem}>
        <a className={styles.footerLink}>{item3}</a>
      </li>
      <li className={styles.footerListItem}>
        <a className={styles.footerLink}>{item4}</a>
      </li>
    </ul>
  );
}

export default FooterList;
