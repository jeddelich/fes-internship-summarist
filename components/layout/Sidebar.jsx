"use client"

import SidebarBtn from "../ui/SidebarBtn"
import { LogOut } from "@/services/firebaseAuth";
import styles from "./Sidebar.module.css";
import { IoHome, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaHighlighter, FaQuestionCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"

function Sidebar() {

  const [active, setActive] = useState("For you")
  const { user } = useAuth()

  function select(btn) {
    setActive(btn)
  }
  
  return (
    <nav className={styles.sidebar}>
      <figure className={styles.logoWrapper}>
        <img src="/logos/summarist__logo.png" alt="Summarist Logo" className={styles.logo} />
      </figure>
      <ul className={styles.sidebar__list}>
        <SidebarBtn Icon={IoHome} text="For you" redirect="/for-you" select={select} active={active} />
        <SidebarBtn Icon={BsBookshelf} text="My Library" redirect="/library" select={select} active={active} />
        <SidebarBtn Icon={FaHighlighter} disabled={{cursor: "not-allowed"}} text="Highlights" select={select} active={active} />
        <SidebarBtn Icon={IoSearch} disabled={{cursor: "not-allowed"}} text="Search" select={select} active={active} />
        <SidebarBtn Icon={IoSettingsOutline} text="Settings" redirect="/settings" select={select} active={active} />
        <SidebarBtn Icon={FaQuestionCircle} disabled={{cursor: "not-allowed"}} text="Help & Support" select={select} active={active} />
        <SidebarBtn Icon={MdLogout} text={user ? "Logout" : "Login"} LogOut={LogOut} />
      </ul>
    </nav>
  );
}

export default Sidebar;
