import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "../../data/allProducts";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const categoryNames = ["All", ...new Set(allProducts.map(product => product.category))];

    // Listen to hash changes in the URL and update selectedCategory
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const cleanHash = decodeURIComponent(hash.replace("#", "")).toLowerCase();
            const matchedCategory = categoryNames.find(
                (cat) => cat.toLowerCase().replace(/\s+/g, "-") === cleanHash
            );
            if (matchedCategory) {
                setSelectedCategory(matchedCategory);
                
                // Allow state update and render before scrolling
                setTimeout(() => {
                    const element = document.getElementById("category-header-title") || document.getElementById("products-display-section");
                    if (element) {
                        const navbarOffset = 100; // sticky header offset
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - navbarOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        } else {
            setSelectedCategory("All");
        }
    }, [location.hash]);

    // Filter categories that should be visible
    const visibleCategories = selectedCategory === "All"
        ? categoryNames.filter(c => c !== "All")
        : [selectedCategory];

    return (
        <section id="products-display-section" className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                {/* Search and Filter Controls */}
                <div className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-6 rounded-3xl shadow-md border border-slate-100">
                    {/* Search Bar */}
                    <div className="relative w-full lg:w-80">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-700 text-sm transition-all"
                        />
                        <Search className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categoryNames.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    const hash = category === "All" ? "" : `#${category.toLowerCase().replace(/\s+/g, "-")}`;
                                    navigate(hash);
                                }}
                                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${selectedCategory === category
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                {(() => {
                    const filtered = allProducts.filter(product => {
                        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
                        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                    });

                    if (filtered.length === 0) {
                        return (
                            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-md">
                                <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                    className="mt-4 text-blue-600 font-semibold hover:underline"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        );
                    }

                    return (
                        <>
                            {selectedCategory !== "All" && (
                                <div id="category-header-title" className="mb-14 text-center">
                                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                                        {selectedCategory}
                                    </span>
                                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                                        {selectedCategory}
                                    </h2>
                                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>
                                </div>
                            )}
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {filtered.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    );
                })()}

            </div>

        </section>
    );
};

export default ProductsSection;