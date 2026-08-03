import { Link } from "react-router-dom";
import {
    Scale,
    FileText,
    Shield,
    AlertTriangle,
    RefreshCcw,
    ArrowRight,
} from "lucide-react";

const TermsConditions = () => {

    const sections = [
        {
            icon: <FileText size={34} />,
            title: "Website Usage",
            text: "By accessing this website, you agree to use it responsibly and only for lawful purposes. Unauthorized use, misuse, or disruption of the website is strictly prohibited."
        },
        {
            icon: <Scale size={34} />,
            title: "Intellectual Property",
            text: "All website content including text, graphics, logos, product information, and design elements are the intellectual property of SteelNova Industries unless otherwise stated."
        },
        {
            icon: <Shield size={34} />,
            title: "Accuracy of Information",
            text: "We strive to ensure all information on this website is accurate and up to date. However, specifications, services, and product details may change without prior notice."
        },
        {
            icon: <AlertTriangle size={34} />,
            title: "Limitation of Liability",
            text: "SteelNova Industries shall not be liable for any direct or indirect damages arising from the use of this website or reliance on any information provided."
        },
        {
            icon: <RefreshCcw size={34} />,
            title: "Changes to Terms",
            text: "These Terms & Conditions may be updated periodically. Continued use of this website after changes indicates your acceptance of the revised terms."
        }
    ];

    return (
        <>

            {/* Hero */}

            <section
                className="relative h-[420px] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/legal/Terms&condition.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10 max-w-4xl px-6">

                    <h1 className="text-5xl lg:text-6xl font-extrabold">
                        Terms & Conditions
                    </h1>

                    <p className="mt-6 text-xl text-slate-200">
                        Understanding the terms governing the use of SteelNova Industries' website and services.
                    </p>

                    <p className="mt-5 text-sm text-slate-300">
                        Last Updated • August 2026
                    </p>

                </div>

            </section>

            {/* Content */}

            <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-8">

                        {sections.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl bg-white p-8 shadow-sm border transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 text-blue-600">
                                    {item.icon}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    {item.title}
                                </h2>

                                <p className="leading-8 text-slate-600">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-slate-900 py-20">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold text-white">
                        Questions About Our Policies?
                    </h2>

                    <p className="mt-5 text-slate-300 text-lg">
                        If you need clarification regarding our terms, our team is here to help.
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

export default TermsConditions;