import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

const HeroSlide = ({ slide }) => {
    return (
        <section className="min-h-[calc(100vh-80px)] bg-gradient-to-r from-slate-50 via-blue-50 to-slate-100 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-5 py-14 lg:pt-8 lg:pb-0 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        {slide.badge}
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-slate-900">
                        {slide.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
                        {slide.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/products"
                            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                        >
                            Explore Products
                        </Link>

                        <Link
                            to="/contact#quote-form"
                            className="rounded-xl border-2 border-slate-300 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Trust Points */}
                    <div className="mt-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={20} />
                            <span className="text-slate-700">
                                ISO 9001 Certified Manufacturing
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={20} />
                            <span className="text-slate-700">
                                Advanced Manufacturing Technology
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={20} />
                            <span className="text-slate-700">
                                Trusted by Industries Worldwide
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="relative z-10 w-full max-w-xl object-contain"
                    />


                </motion.div>
            </div>
        </section>
    );
};

export default HeroSlide;