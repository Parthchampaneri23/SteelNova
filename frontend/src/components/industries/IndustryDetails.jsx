import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { industries } from "../../data/industryData";

const IndustryDetails = () => {
    const [expanded, setExpanded] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace("#", "");
            const matchedIndustry = industries.find(
                (ind) =>
                    ind.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === targetId
            );
            if (matchedIndustry) {
                setExpanded(matchedIndustry.id);
                // Allow a small timeout for render to complete before scrolling
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                }, 100);
            }
        }
    }, [location.hash]);

    const toggleExpand = (id, e) => {
        if (e) e.stopPropagation();
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section className="bg-white py-14">
            <div className="max-w-7xl mx-auto px-4 lg:px-5">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            id={industry.title
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")}
                            className="h-fit bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                            onClick={(e) => toggleExpand(industry.id, e)}
                        >
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                            />

                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {industry.title}
                                </h2>

                                <p className="text-gray-600 mt-2 text-sm">
                                    {industry.description}
                                </p>

                                {/* View Details Button */}
                                <button
                                    type="button"
                                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700 transition"
                                    onClick={(e) =>
                                        toggleExpand(industry.id, e)
                                    }
                                >
                                    View Details <ArrowRight size={14} />
                                </button>

                                {/* Expanded Section */}
                                <div
                                    className={`mt-4 transition-all duration-300 ease-in-out ${expanded === industry.id
                                        ? "max-h-screen opacity-100"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    <div className="space-y-2">
                                        {industry.products.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2"
                                            >
                                                <CheckCircle2
                                                    className="text-blue-600"
                                                    size={20}
                                                />
                                                <span className="text-gray-700 text-sm">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to="/contact#quote-form"
                                        className="mt-4 inline-flex items-center gap-3 rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Request Quote{" "}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryDetails;