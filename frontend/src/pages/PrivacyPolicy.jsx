import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Lock,
    Database,
    Cookie,
    Mail,
    ArrowRight,
} from "lucide-react";

const PrivacyPolicy = () => {

    const sections = [
        {
            icon: <Database size={34} />,
            title: "Information We Collect",
            text: "We collect information that you voluntarily submit through contact forms, quotation requests, and career applications including your name, email address, phone number, company details, and project requirements."
        },
        {
            icon: <ShieldCheck size={34} />,
            title: "How We Use Your Information",
            text: "The information collected is used only to respond to enquiries, process applications, provide quotations, improve our services, and maintain customer communication."
        },
        {
            icon: <Lock size={34} />,
            title: "Data Security",
            text: "SteelNova Industries implements appropriate technical and organizational security measures to protect personal information from unauthorized access, disclosure, or misuse."
        },
        {
            icon: <Cookie size={34} />,
            title: "Cookies & Analytics",
            text: "Our website may use cookies and analytics tools to improve website performance, enhance user experience, and understand visitor behaviour."
        },
        {
            icon: <Mail size={34} />,
            title: "Contact Us",
            text: "For any questions regarding this Privacy Policy or your personal information, please contact us through our Contact page or email us directly."
        }
    ];

    return (
        <>

            {/* Hero */}

            <section
                className="relative h-[420px] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/legal/privacypolicy.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10 max-w-4xl px-6">

                    <h1 className="text-5xl lg:text-6xl font-extrabold">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 text-xl text-slate-200">
                        Protecting your information with transparency,
                        responsibility, and industry best practices.
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
                        Need More Information?
                    </h2>

                    <p className="mt-5 text-slate-300 text-lg">
                        Our team is always available to answer your questions
                        regarding privacy, security, and data protection.
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

export default PrivacyPolicy;