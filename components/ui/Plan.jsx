import styles from "./Plan.module.css"

function Plan({ title, price, trialInfo, index, togglePlanSelect, planSelect}) {
  return (
    <button
      className={
        planSelect === index
          ? `${styles.planPackage} + ${styles.planSelected}`
          : styles.planPackage
      }
      onClick={() => togglePlanSelect(index)}
    >
      <figure className={styles.selectionCircle}>
        {planSelect === index && <div className={styles.selectionDot}></div>}
      </figure>
      <div className={styles.planDescription}>
        <h4 className={styles.planTitle}>{title}</h4>
        <div className={styles.price}>{price}</div>
        <div className={styles.trialInfo}>{trialInfo}</div>
      </div>
    </button>
  );
}

export default Plan;
