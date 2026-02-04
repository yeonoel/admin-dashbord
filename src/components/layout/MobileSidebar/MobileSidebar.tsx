import { ArrowLeftToLine, ChartColumn, LogOut, PanelsTopLeft, ShoppingBasket, ShoppingCart, SlidersHorizontal, Star, Users } from "lucide-react";

interface MobileSidebarProps {
    open: boolean;
    onClose: () => void;
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Overlay sombre */}
            <div
                className="fixed inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Menu qui glisse */}
            <aside className="flex flex-col relative w-64 bg-white h-full p-4 shadow-lg">
                <div className="flex items-center justify-between mb-4 border-b border-border pb-5">
                    <h1 className=" font-bold flex items-center gap-2">
                        <span className="w-7 h-7 bg-black text-white flex items-center justify-center rounded-full">
                            <Star size={15} />
                        </span>
                        Admin Panel
                    </h1>
                    <span onClick={onClose}><ArrowLeftToLine size={16} strokeWidth={1.75} /></span>
                </div>
                <nav className="space-y-2">
                    <a href="#"
                        className="flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <PanelsTopLeft className="w-3.5 h-3.5" />
                        <span>Overview</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 p-2 text-sm rounded-lg hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Orders</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 p-2 text-sm rounded-lg hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <ShoppingBasket className="w-3.5 h-3.5" />
                        <span>Products</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 p-2 text-sm rounded-ld hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <Users className="w-3.5 h-3.5" />
                        <span>Customers</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 p-2 text-sm rounded-lg hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <ChartColumn className="w-3.5 h-3.5" />
                        <span>Analytics</span>
                    </a>

                    <a href="#" className="flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground">
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Settings</span>
                    </a>
                </nav>
                <div className="border-t border-border p-2 mt-auto">
                    <button className=" flex items-center gap-2 p-1.5 rounded-lg text-xs hover:bg-gray-100 focus:bg-gray-900 focus:text-primary-foreground ">
                        <LogOut className="w-5 h-5" />
                        <span> Exit dashboard</span>
                    </button>
                </div>
            </aside>
        </div>
    );
}
