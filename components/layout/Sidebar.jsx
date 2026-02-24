import SidebarBtn from "../ui/SidebarBtn";
import { LogOut } from "@/services/firebaseAuth";
import styles from "./Sidebar.module.css";
import { IoHome } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { FaHighlighter } from "react-icons/fa";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <figure className={styles.logoWrapper}>
        <img src="/logos/summarist__logo.png" alt="Summarist Logo" className={styles.logo} />
      </figure>
      <ul className={styles.sidebar__list}>
        <SidebarBtn icon={IoHome} text="For you" redirect="/for-you" />
        <SidebarBtn icon={GiBookshelf} text="My Library" redirect="/library" />
        <SidebarBtn icon={FaHighlighter} text="Highlights" />
        <SidebarBtn icon="" text="Search" />
        <SidebarBtn icon="" text="Settings" redirect="/settings" />
        <SidebarBtn icon="" text="Help & Support" />
        <SidebarBtn icon="" text="Logout" LogOut={LogOut} />
      </ul>
    </nav>
  );
}

export default Sidebar;
