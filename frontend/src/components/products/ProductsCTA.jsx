import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsCTA = () => {
    return (
        <section className="bg-blue-600 py-16">

            <div className="max-w-5xl mx-auto px-6 text-center text-white">

                <span className="uppercase tracking-[0.3em] font-semibold">
                    Ready To Get Started?
                </span>

                <h2 className="mt-5 text-5xl font-bold">
                    Looking For The Right Industrial Solution?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                    Our engineering team is ready to help you choose the perfect
                    products for your industrial applications.
                </p>

                <Link
                  to="/contact#quote-form"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
                >
                  Request Quote
                  <ArrowRight size={20} />
                </Link>

            </div>

        </section>
    );
};

export default ProductsCTA;