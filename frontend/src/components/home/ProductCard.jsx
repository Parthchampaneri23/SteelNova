import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link
            to={"/products" + (product.slug || "")}
            className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

            </div>

            {/* Content */}
            <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                </p>

            </div>

        </Link>
    );
};

export default ProductCard;