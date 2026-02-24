import SidebarBtn from "../ui/SidebarBtn";
import { LogOut } from "@/services/firebaseAuth";

function Sidebar() {
  return (
    <nav>
        <div className="container">
            <div className="row">
                <figure>
                    <img src="" alt="" />
                </figure>
                <ul>
                    <SidebarBtn text="For you" redirect="/for-you"/>
                    <SidebarBtn text="My Library" redirect="/library"/>
                    <SidebarBtn text="Highlights"/>
                    <SidebarBtn text="Search"/>
                    <SidebarBtn text="Settings" redirect="/settings"/>
                    <SidebarBtn text="Help & Support"/>
                    <SidebarBtn text="Logout" LogOut={LogOut}/>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar