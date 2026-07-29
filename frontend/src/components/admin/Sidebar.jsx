import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Mail,
    Briefcase,
    Factory
} from "lucide-react";

const Sidebar = () => {

    const menu = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin/dashboard",
        },
        {
            name: "Contacts",
            icon: Mail,
            path: "/admin/contacts",
        },
        {
            name: "Careers",
            icon: Briefcase,
            path: "/admin/careers",
        },
    ];

    return (
        <aside className="w-72 bg-slate-900 text-white flex flex-col">

            <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-700">

                <Factory className="text-blue-500" size={32} />

                <div>
                    <h2 className="text-xl font-bold">
                        SteelNova
                    </h2>

                    <p className="text-sm text-slate-400">
                        Admin Panel
                    </p>
                </div>

            </div>

            <nav className="flex-1 p-5 space-y-2">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 rounded-xl px-4 py-3 transition
                                ${isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"}`
                            }
                        >
                            <Icon size={20} />

                            {item.name}
                        </NavLink>
                    );
                })}

            </nav>

        </aside>
    );
};

export default Sidebar;