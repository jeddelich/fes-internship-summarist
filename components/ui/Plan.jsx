import styles from "./Plan.module.css"

function Plan({ title, price, trialInfo, priceId, togglePlanSelect, planSelect}) {
  return (
    <button
      className={
        planSelect === priceId
          ? `${styles.planPackage} + ${styles.planSelected}`
          : styles.planPackage
      }
      onClick={() => togglePlanSelect(priceId)}
    >
      <figure className={styles.selectionCircle}>
        {planSelect === priceId && <div className={styles.selectionDot}></div>}
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
