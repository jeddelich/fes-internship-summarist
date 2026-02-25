import { useRouter } from "next/navigation";
import styles from "./SidebarBtn.module.css";

function SidebarBtn({
  text,
  redirect,
  disabled,
  LogOut,
  Icon,
  select,
  active,
}) {

  const router = useRouter();

  function action() {
    if (LogOut) {
      LogOut();
    } else if (redirect) {
      select(text);
      router.push(redirect);
    } else {
      select(text);
    }
  }

  return (
    <li>
      <button onClick={action} className={active === text ? styles.btnHoverSelected : styles.btn} style={disabled}>
        <div
          className={active === text && !disabled ? styles.btnSelected : ""}
        ></div>
        <div
          className={active === text && disabled ? styles.btnDisabled : ""}
        ></div>
        <figure className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </figure>
        <div className={styles.text}>{text}</div>
      </button>
    </li>
  );
}

export default SidebarBtn;
