import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { navigation } from "../../constants/navigation";
import { allProducts } from "../../data/allProducts";
import { productCategories } from "../../data/productCategories";

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(null); // 'Products' or 'Resources'
    const [openCategory, setOpenCategory] = useState(null); // category ID or title

    const toggleDropdown = (title) => {
        if (openDropdown === title) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(title);
        }
    };

    const toggleCategory = (title) => {
        if (openCategory === title) {
            setOpenCategory(null);
        } else {
            setOpenCategory(title);
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setOpenDropdown(null);
        setOpenCategory(null);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="pt-0 pb-6 px-6">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold text-slate-900">Menu</span>
                    <button
                        onClick={handleLinkClick}
                        className="text-slate-500 hover:text-slate-800 p-1"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {navigation.map((item) => {
                        const hasDropdown = !!item.dropdown;
                        const isDropdownOpen = openDropdown === item.title;

                        return (
                            <div key={item.title} className="border-b border-slate-100 pb-3 last:border-0">
                                {hasDropdown ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.title)}
                                            className="flex items-center justify-between w-full text-lg font-semibold text-slate-800 hover:text-blue-600 py-1"
                                        >
                                            <span>{item.title}</span>
                                            {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="mt-3 pl-4 space-y-3">
                                                {item.title === "Products" ? (
                                                    productCategories.map((category) => {
                                                        const isCatOpen = openCategory === category.title;
                                                        const catProducts = allProducts.filter(
                                                            (p) => p.category === category.title
                                                        );

                                                        return (
                                                            <div key={category.id} className="border-l-2 border-slate-100 pl-3">
                                                                <button
                                                                    onClick={() => toggleCategory(category.title)}
                                                                    className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 hover:text-blue-600 py-1"
                                                                >
                                                                    <span>{category.title}</span>
                                                                    {isCatOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                                </button>

                                                                {isCatOpen && (
                                                                    <div className="mt-2 pl-3 space-y-2">
                                                                        {catProducts.map((prod) => (
                                                                            <NavLink
                                                                                key={prod.id}
                                                                                to={`/products/${prod.slug}`}
                                                                                onClick={handleLinkClick}
                                                                                className="block text-xs font-medium text-slate-500 hover:text-blue-600 py-1"
                                                                            >
                                                                                {prod.name}
                                                                            </NavLink>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    item.dropdown.map((sub) => (
                                                        <NavLink
                                                            key={sub.title}
                                                            to={sub.path}
                                                            onClick={handleLinkClick}
                                                            className="block text-sm font-medium text-slate-600 hover:text-blue-600 py-1"
                                                        >
                                                            {sub.title}
                                                        </NavLink>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        onClick={handleLinkClick}
                                        className={({ isActive }) =>
                                            `block text-lg font-semibold py-1 transition-colors ${isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                                            }`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;