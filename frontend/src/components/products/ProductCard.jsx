import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-8">

                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                    {product.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {product.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                </p>

                <div className="mt-6 space-y-3">

                    {product.features.map((feature, index) => (

                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <CheckCircle2
                                size={18}
                                className="text-blue-600"
                            />

                            <span className="text-slate-600">
                                {feature}
                            </span>

                        </div>

                    ))}

                </div>

                <div className="mt-8 flex items-center justify-between">

                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {product.application}
                    </span>

                    <Link
                        to={`/products/${product.slug}`}
                        className="flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
                    >
                        View Details
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;