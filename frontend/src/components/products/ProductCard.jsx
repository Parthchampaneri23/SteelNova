import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link
            to={`/products/${product.slug}`}
            className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-50 overflow-hidden" style={{ height: "256px" }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110"
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

                <p className="mt-4 leading-7 text-slate-600 line-clamp-2">
                    {product.description}
                </p>

            </div>

        </Link>
    );
};

export default ProductCard;