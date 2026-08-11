import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigation } from "../../constants/navigation";
import { allProducts } from "../../data/allProducts";
import { productCategories } from "../../data/productCategories";

const DesktopMenu = () => {
    const [productsOpen, setProductsOpen] = useState(false);
    return (
        <ul className="hidden lg:flex items-stretch gap-8 h-full">
            {navigation.map((item) => (
                <li key={item.title} className={`${item.title === "Products" ? "static" : "relative"} group flex items-center h-full`} onMouseEnter={() => item.title === "Products" && setProductsOpen(true)} onMouseLeave={() => item.title === "Products" && setProductsOpen(false)}>
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

                    {item.dropdown && item.title === "Products" ? (
                        <div className={`absolute left-6 right-6 top-full ${productsOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-3'} transition-all duration-300 pt-0 z-50`}>
                            <div className="bg-white shadow-2xl rounded-3xl border border-slate-100 p-8 grid grid-cols-6 gap-6">
                                {productCategories.map((category) => {
                                    const catProducts = allProducts.filter(
                                        (p) => p.category === category.title
                                    );
                                    return (
                                        <div key={category.id} className="flex flex-col bg-slate-50/50 p-4 rounded-2xl hover:bg-blue-50/40 hover:border-blue-100 hover:shadow-sm transition-all duration-300 border border-slate-100/50">
                                            <NavLink
                                                to={`/products#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="font-bold text-slate-900 hover:text-blue-600 text-xs tracking-wider uppercase mb-3 pb-2 border-b border-slate-100 transition-colors"
                                            >
                                                {category.title}
                                            </NavLink>
                                            <ul className="space-y-2">
                                                {catProducts.map((prod) => (
                                                    <li key={prod.id}>
                                                        <NavLink
                                                            to={`/products/${prod.slug}`}
                                                            className="text-xs text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 block py-0.5"
                                                            onClick={() => setProductsOpen(false)}
                                                        >
                                                            {prod.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : item.dropdown ? (
                        <div className="absolute left-0 top-full invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pt-0 z-50">
                            <div className="bg-white shadow-xl rounded-xl w-64 border py-2">
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
                        </div>
                    ) : null}
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenu;