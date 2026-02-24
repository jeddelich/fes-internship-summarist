import { IoHome } from "react-icons/io5";
import styles from "./SidebarBtn.module.css";

function SidebarBtn({ text, redirect, disabled, LogOut, Icon }) {
  
return (
    <li>
      <button onClick={LogOut} className={styles.btn} style={disabled}>
        <figure className={styles.iconWrapper}>
        <Icon className={styles.icon}/>
        </figure>
        <div className={styles.text}>{text}</div>
      </button>
    </li>
  );
}

export default SidebarBtn;
