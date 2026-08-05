import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import aboutImage from "../../assets/images/about/about-company.png";

const AboutPreview = () => {
    return (
        <section className="bg-slate-50 py-14">
            <div className="max-w-7xl mx-auto px-4 lg:px-5 grid lg:grid-cols-2 gap-16 items-stretch">

                {/* Left Image */}
                <div className="overflow-hidden rounded-3xl shadow-2xl min-h-[400px]">
                    <img
                        src={aboutImage}
                        alt="SteelNova Industries"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div>

                    <span className="text-blue-600 uppercase tracking-[0.3em] font-semibold">
                        About SteelNova
                    </span>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Engineering Reliable Industrial Solutions For A Better Tomorrow
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        SteelNova Industries is a leading manufacturer of industrial
                        equipment delivering innovative engineering solutions with
                        uncompromising quality, precision manufacturing, and global
                        standards.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={22} />
                            <span>Advanced Manufacturing Technology</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={22} />
                            <span>Certified Quality Standards</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={22} />
                            <span>Experienced Engineering Team</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-blue-600" size={22} />
                            <span>Trusted Across Multiple Industries</span>
                        </div>

                    </div>

                    <Link
                        to="/about"
                        className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
                    >
                        Learn More
                        <ArrowRight size={20} />
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default AboutPreview;