import { allProducts } from "../../data/allProducts";
import ProductCard from "./ProductCard";

const ProductsSection = () => {

    const categories = [...new Set(allProducts.map(product => product.category))];

    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                {categories.map((category) => {

                    const products = allProducts.filter(
                        (product) => product.category === category
                    );

                    return (

                        <div
                            id={category.toLowerCase().replace(/\s+/g, "-")}
                            key={category}
                            className="mb-24 scroll-mt-28 last:mb-0"
                        >

                            <div className="mb-14 text-center">

                                <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                                    {category}
                                </span>

                                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                                    {category}
                                </h2>

                                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

                            </div>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                                {products.map((product) => (

                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />

                                ))}

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>
    );
};

export default ProductsSection;