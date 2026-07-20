import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navigation } from "../../constants/navigation";

const DesktopMenu = () => {
    return (
        <ul className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
                <li key={item.title} className="relative group">
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-1 font-medium transition-colors duration-300 ${isActive
                                ? "text-blue-600"
                                : "text-slate-700 hover:text-blue-600"
                            }`
                        }
                    >
                        {item.title}

                        {item.dropdown && <ChevronDown size={16} />}
                    </NavLink>

                    {item.dropdown && (
                        <div className="absolute left-0 top-full invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-xl rounded-xl w-64 border mt-4">
                            {item.dropdown.map((sub) => (
                                <NavLink
                                    key={sub.title}
                                    to={sub.path}
                                    className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    {sub.title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenu;