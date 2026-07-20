import { ArrowRight } from "lucide-react";

const IndustryCard = ({ industry }) => {
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

                <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent pb-8 opacity-0 transition-all duration-500 group-hover:opacity-100">

                    <button className="translate-y-8 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Explore Industry
                    </button>

                </div>

            </div>

            {/* Content */}
            <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                    {industry.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
                    Learn More
                    <ArrowRight size={18} />
                </button>

            </div>

        </div>
    );
};

export default IndustryCard;