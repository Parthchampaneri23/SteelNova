import { ArrowRight } from "lucide-react";
import { productCategories } from "../../data/productCategories";

const ProductCategories = () => {
    return (
        <section className="bg-white py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                        Categories
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Explore Our Product Range
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        Discover a complete portfolio of precision-engineered
                        industrial products designed for performance,
                        durability and reliability.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {productCategories.map((category) => (

                        <div
                            key={category.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <img
                                src={category.image}
                                alt={category.title}
                                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            <div className="p-8">

                                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                                    {category.count} Products
                                </span>

                                <h3 className="mt-5 text-2xl font-bold">
                                    {category.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7">
                                    {category.description}
                                </p>

                                <a
                                    href={`#${category.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
                                >
                                    Explore
                                    <ArrowRight size={18} />
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default ProductCategories;