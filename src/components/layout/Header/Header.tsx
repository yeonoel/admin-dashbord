import { ChartNoAxesGantt, Menu } from "lucide-react";
import { useState } from "react";
import { MobileSidebar } from "../MobileSidebar/MobileSidebar";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center p-4 bg-white border-b border-border">
                {/* LEFT */}
                <div className="flex items-center gap-3">
                    <ChartNoAxesGantt className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />
                    <span className="text-lg font-semibold">Overview</span>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-sm font-medium">Admin User</p>
                        <p className="text-xs text-gray-500">adminemail@com</p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                        AU
                    </div>
                </div>
            </div>

            {/* MOBILE SIDEBAR */}
            <MobileSidebar open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
