import { motion } from "framer-motion";

const PageHero = ({ title, subtitle }) => {
    return (
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>

                <p className="mt-5 text-sm text-slate-400">
                    Last Updated: August 2026
                </p>

            </div>

        </section>
    );
};

export default PageHero;