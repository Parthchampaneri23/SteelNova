import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { allProducts } from "../../data/allProducts";

const ProductDetails = () => {
    const { slug } = useParams();

    const product = allProducts.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <section className="py-14 text-center">
                <h2 className="text-4xl font-bold">
                    Product Not Found
                </h2>

                <Link
                    to="/products"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white"
                >
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>
            </section>
        );
    }

    return (
        <section className="bg-slate-50 py-14">
            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <Link
                    to="/products"
                    className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="group overflow-hidden rounded-3xl bg-white p-3 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:sticky lg:top-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    <div>

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            {product.category}
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-slate-900">
                            {product.name}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {product.description}
                        </p>

                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-slate-900">
                                Key Features
                            </h3>

                            <div className="mt-5 space-y-4">
                                {product.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-blue-600"
                                            size={20}
                                        />

                                        <span className="text-slate-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-2xl font-bold text-slate-900">
                                Applications
                            </h3>

                            <p className="mt-4 text-slate-700 leading-7">
                                {product.application}
                            </p>
                        </div>

                        <Link
                            to="/contact#quote-form"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Request Quote
                            <ArrowRight size={20} />
                        </Link>

                    </div>

                </div>

                {product.specifications && (
                    <div className="mt-16 border-t border-slate-200 pt-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            Product Specifications
                        </h2>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm max-w-4xl">
                            <table className="w-full text-base">
                                <tbody>
                                    {Object.entries(product.specifications).map(
                                        ([key, value], index) => (
                                            <tr
                                                key={key}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-white"
                                                        : "bg-slate-50"
                                                }
                                            >
                                                <td className="w-2/5 border-b border-slate-200 px-6 py-4 font-semibold text-slate-700">
                                                    {key}
                                                </td>
                                                <td className="border-b border-slate-200 px-6 py-4 text-slate-600 font-medium">
                                                    {value}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ProductDetails;