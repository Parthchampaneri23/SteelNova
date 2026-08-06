import { Link } from "react-router-dom";
import {
    Home,
    Building2,
    Package,
    Factory,
    FolderKanban,
    BookOpen,
    Briefcase,
    Phone,
    ShieldCheck,
    FileText,
    ArrowRight,
} from "lucide-react";

const links = [
    { title: "Home", path: "/", icon: <Home size={32} /> },
    { title: "About Us", path: "/about", icon: <Building2 size={32} /> },
    { title: "Products", path: "/products", icon: <Package size={32} /> },
    { title: "Industries", path: "/industries", icon: <Factory size={32} /> },
    { title: "Infrastructure", path: "/infrastructure", icon: <Factory size={32} /> },
    { title: "Projects", path: "/projects", icon: <FolderKanban size={32} /> },
    { title: "Resources", path: "/resources", icon: <BookOpen size={32} /> },
    { title: "Careers", path: "/careers", icon: <Briefcase size={32} /> },
    { title: "Contact", path: "/contact", icon: <Phone size={32} /> },
    { title: "Privacy Policy", path: "/privacy-policy", icon: <ShieldCheck size={32} /> },
    { title: "Terms & Conditions", path: "/terms-conditions", icon: <FileText size={32} /> },
];

const Sitemap = () => {
    return (
        <>
            {/* Hero */}

            <section
                className="relative min-h-[380px] py-12 flex items-center justify-center bg-cover bg-center text-white"
                style={{
                    backgroundImage: "url('/legal/sitemap.png')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10 max-w-4xl px-6 text-center">

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Sitemap
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7 text-slate-200">
                        Quickly navigate every section of the SteelNova Industries website.
                    </p>

                </div>

            </section>

            {/* Cards */}

            <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {links.map((item) => (

                            <Link
                                key={item.title}
                                to={item.path}
                                className="group rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                            >

                                <div className="text-blue-600 mb-6">
                                    {item.icon}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900">
                                    {item.title}
                                </h2>

                                <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">

                                    Visit Page

                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-2"
                                    />

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            {/* Bottom CTA */}

            <section className="bg-slate-900 py-20">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold text-white">
                        Need Assistance?
                    </h2>

                    <p className="mt-5 text-lg text-slate-300">
                        Our experts are always ready to help you find the right industrial solution.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </section>

        </>
    );
};

export default Sitemap;