import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function AppLayout({children}: {children: ReactNode}) {

    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 ml-50!">{children}</main>
        </div>
    )
}