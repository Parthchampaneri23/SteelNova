import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const HeroSlide = ({ slide }) => {
    return (
        <section className="min-h-[450px] lg:min-h-[calc(100vh-180px)] bg-gradient-to-r from-slate-50 via-blue-50 to-slate-100 flex items-center overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 lg:px-5 pt-6 pb-16 md:py-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12">

                {/* Left Content */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >

                    <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-semibold text-blue-700">
                        {slide.badge}
                    </span>

                    <h1 className="mt-5 text-[42px] leading-tight md:text-6xl xl:text-7xl font-extrabold text-slate-900">
                        {slide.title}
                    </h1>

                    <p className="mt-5 text-base md:text-lg leading-8 text-slate-600 max-w-xl mx-auto lg:mx-0">
                        {slide.description}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Link
                            to="/products"
                            className="rounded-xl border-2 border-slate-400 px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl"
                        >
                            Explore Products
                        </Link>

                        <Link
                            to="/contact#quote-form"
                            className="rounded-xl border-2 border-slate-400 px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl"
                        >
                            Get Quote
                        </Link>

                        <a
                            href="/catlogue/steelnovacatalogue.pdf"
                            download="SteelNova_Catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl"
                        >
                            <Download size={18} />
                            Download Catalogue
                        </a>

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
                        className="relative z-10 w-full max-w-xl h-[220px] md:h-[420px] object-cover rounded-2xl shadow-xl"
                    />

                </motion.div>

            </div>

        </section>
    );
};

export default HeroSlide;