import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const ProductCategories = () => {
    return (
        <section className="bg-slate-50 py-16">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] font-semibold text-blue-600">
                        Our Products
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Industrial Products We Manufacture
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
                        SteelNova manufactures a wide range of industrial equipment
                        designed for performance, durability and efficiency across
                        multiple industries.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ProductCategories;