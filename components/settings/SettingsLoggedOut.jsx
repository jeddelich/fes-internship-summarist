import styles from "@/app/(app)/settings/page.module.css";
import Btn from "../ui/Btn"

function SettingsLoggedOut({ openLogin }) {
    
    return (
    <div className={styles.loggedOut}>
      <hr className={styles.separator} />
      <figure className={styles.loggedOutImgWrapper}>
        <img src="/images/LoggedOut.svg" className={styles.loggedOutImg} alt="" />
      </figure>
      <h2 className={`${styles.subtitle} + ${styles.loggedOutSubtitle}`}>
        Log in to your account to see your details.
      </h2>
        <Btn text="Login" color="!bg-[#2bd97c] !text-[#032b41]" wrapper="w-[160px]" onClick={openLogin}/>
    </div>
  );
}

export default SettingsLoggedOut;
