import styles from "../../app/(app)/settings/page.module.css"
import Btn from "../ui/Btn"
import { useRouter } from "next/navigation";

function SettingsSection({ subtitle, content}) {
  
  const router = useRouter()

  function upgradePlan() {
    router.push("/choose-plan")
  }
  
  return (
    <div className={styles.section}>
      <hr className={styles.separator} />
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.content}>{content}</div>
      {
        content === "Basic" && <Btn text="Upgrade to Premium" color="bg-[#2bd97c]!
    text-[#032b41]!" wrapper="w-[180px] my-[20px]!" onClick={upgradePlan}/>
      }
    </div>
  );
}

export default SettingsSection;
