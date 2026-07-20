import { ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-end justify-center pb-8">

                    <button className="translate-y-8 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        View Product
                    </button>

                </div>

            </div>

            {/* Content */}
            <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
                    Learn More
                    <ArrowRight size={18} />
                </button>

            </div>

        </div>
    );
};

export default ProductCard;