import { Header } from "../Header/Header";
import { MobileSidebar } from "../MobileSidebar/MobileSidebar";
import { Sidebar } from "../Sidebar/Sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <MobileSidebar open={false} onClose={() => { }} />
            <div className="flex-1">
                <Header />
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
