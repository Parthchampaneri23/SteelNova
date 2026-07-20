import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="p-6">
                <button
                    className="mb-8 text-3xl"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                <div className="flex flex-col gap-6">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-700 hover:text-blue-600"
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;