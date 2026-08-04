import { CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const HeroContent = () => {
    return (
        <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                Engineering Excellence Since 2008
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Precision Engineering
                <br />
                For Modern Industries
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                SteelNova Industries delivers high-quality industrial pumps,
                valves, heat exchangers, pressure vessels, and process
                equipment trusted by manufacturers across multiple industries.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <Link
                    to="/products"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition"
                >
                    Explore Products
                </Link>

                <Link
                    to="/contact#quote-form"
                    className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-7 py-4 rounded-xl font-semibold transition"
                >
                    Get Quote
                </Link>

                <a
                    href="/catlogue/steelnovacatalogue.pdf"
                    download="SteelNova_Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-4 rounded-xl font-semibold transition"
                >
                    <Download size={18} />
                    Download Catalogue
                </a>

            </div>

            <div className="mt-10 grid gap-3">

                <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>ISO 9001 Certified Manufacturing</span>
                </div>

                <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>18+ Years of Engineering Experience</span>
                </div>

                <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span>600+ Satisfied Industrial Clients</span>
                </div>

            </div>

        </div>
    );
};

export default HeroContent;