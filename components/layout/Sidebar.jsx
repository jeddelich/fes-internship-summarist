import SidebarBtn from "../ui/SidebarBtn";
import { LogOut } from "@/services/firebaseAuth";
import styles from "./Sidebar.module.css";
import { IoHome, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaHighlighter, FaQuestionCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <figure className={styles.logoWrapper}>
        <img src="/logos/summarist__logo.png" alt="Summarist Logo" className={styles.logo} />
      </figure>
      <ul className={styles.sidebar__list}>
        <SidebarBtn Icon={IoHome} text="For you" redirect="/for-you" />
        <SidebarBtn Icon={BsBookshelf} text="My Library" redirect="/library" />
        <SidebarBtn Icon={FaHighlighter} disabled={{cursor: "not-allowed"}} text="Highlights" />
        <SidebarBtn Icon={IoSearch} disabled={{cursor: "not-allowed"}} text="Search" />
        <SidebarBtn Icon={IoSettingsOutline} text="Settings" redirect="/settings" />
        <SidebarBtn Icon={FaQuestionCircle} disabled={{cursor: "not-allowed"}} text="Help & Support" />
        <SidebarBtn Icon={MdLogout} text="Logout" LogOut={LogOut} />
      </ul>
    </nav>
  );
}

export default Sidebar;
