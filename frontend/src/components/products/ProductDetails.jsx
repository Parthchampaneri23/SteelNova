import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { allProducts } from "../../data/allProducts";

const ProductDetails = () => {
    const { slug } = useParams();
    const [activeTab, setActiveTab] = useState("overview");

    const product = allProducts.find((item) => item.slug === slug);

    if (!product) {
        return (
            <section className="py-32 text-center">
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

    const tabs = [
        { id: "overview", label: "Overview & Features" },
        ...(product.specifications ? [{ id: "specs", label: "Specifications" }] : []),
        ...(product.application ? [{ id: "applications", label: "Applications" }] : [])
    ];

    return (
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <Link
                    to="/products"
                    className="mb-10 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Sticky Image Column */}
                    <div className="group overflow-hidden rounded-3xl bg-white p-3 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:sticky lg:top-28">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Details and Tabs Column */}
                    <div>

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            {product.category}
                        </span>

                        <h1 className="mt-6 text-5xl font-bold text-slate-900 tracking-tight">
                            {product.name}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {product.description}
                        </p>

                        {/* Interactive Tabs Menu */}
                        <div className="mt-10 border-b border-slate-200">
                            <nav className="flex space-x-8" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`pb-4 text-sm font-semibold border-b-2 transition-all duration-300 ${activeTab === tab.id
                                                ? "border-blue-600 text-blue-600"
                                                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content Panel */}
                        <div className="mt-8 min-h-[220px]">
                            {activeTab === "overview" && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        Key Features
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {product.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                                            >
                                                <CheckCircle2
                                                    className="text-blue-600 flex-shrink-0"
                                                    size={20}
                                                />
                                                <span className="text-slate-700 font-medium text-sm">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === "specs" && product.specifications && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        Specifications
                                    </h3>
                                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                                        <table className="w-full text-sm">
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
                                                            <td className="w-2/5 border-b border-slate-200 px-5 py-3.5 font-semibold text-slate-700">
                                                                {key}
                                                            </td>
                                                            <td className="border-b border-slate-200 px-5 py-3.5 text-slate-600">
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

                            {activeTab === "applications" && product.application && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        Applications
                                    </h3>
                                    <p className="text-slate-600 leading-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        {product.application}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* CTA Request Quote */}
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <Link
                                to="/contact#quote-form"
                                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100"
                            >
                                Request Quote
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductDetails;