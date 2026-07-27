import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCTA = () => {
    return (
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-14">

            <div className="max-w-6xl mx-auto px-6 text-center text-white">

                <span className="uppercase tracking-[0.3em] font-semibold text-blue-100">
                    Let's Build Together
                </span>

                <h2 className="mt-6 text-5xl font-bold">
                    Ready To Start Your Next Industrial Project?
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                    From concept and engineering to manufacturing and installation,
                    SteelNova Industries delivers reliable industrial solutions
                    tailored to your business needs.
                </p>

                <Link
                    to="/contact#quote-form"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    Request A Quote
                    <ArrowRight size={20} />
                </Link>

            </div>

        </section>
    );
};

export default ProjectCTA;