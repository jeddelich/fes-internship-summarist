import styles from "../../app/(app)/settings/page.module.css"
import Btn from "../ui/Btn"

function SettingsSection({ subtitle, content}) {
  return (
    <div className={styles.section}>
      <hr className={styles.separator} />
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.content}>{content}</div>
      {
        content && <Btn text="Upgrade to Premium" color="bg-[#2bd97c]
    text-[#032b41]"/>
      }
    </div>
  );
}

export default SettingsSection;
