import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <>
            {/* Hero */}
            <section
                className="relative h-[320px] flex items-center justify-center bg-cover bg-center text-white"
                style={{
                    backgroundImage: "url('/legal/privacypolicy.png')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10 max-w-4xl px-6 text-center">

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-7 text-slate-200">
                        Protecting your information with transparency,
                        responsibility and industry best practices.
                    </p>

                    <p className="mt-4 text-sm text-slate-300">
                        Last Updated • August 2026
                    </p>

                </div>
            </section>

            {/* Document */}

            <section className="bg-slate-100 py-16">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-3xl bg-white shadow-xl p-10 lg:p-14">

                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                            STEELNOVA INDUSTRIES
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Privacy Policy
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            SteelNova Industries respects your privacy and is committed
                            to protecting your personal information. This Privacy Policy
                            explains how we collect, use, disclose and safeguard your
                            information whenever you visit our website or communicate
                            with us through our contact forms, quotation requests or
                            career applications.
                        </p>

                        {/* Table of Contents */}

                        <div className="mt-12 rounded-2xl border bg-slate-50 p-8">

                            <h3 className="text-2xl font-bold text-slate-900">
                                Table of Contents
                            </h3>

                            <ol className="mt-6 space-y-3 text-blue-600 font-medium">

                                <li>1. Information We Collect</li>
                                <li>2. How We Use Your Information</li>
                                <li>3. Cookies & Tracking Technologies</li>
                                <li>4. Data Security</li>
                                <li>5. Third Party Services</li>
                                <li>6. Data Retention</li>
                                <li>7. Your Rights</li>
                                <li>8. Changes to this Policy</li>
                                <li>9. Contact Information</li>

                            </ol>

                        </div>

                        {/* Section 1 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                1. Information We Collect
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                We collect information that you voluntarily
                                provide when you contact us, request quotations,
                                apply for careers or communicate with our team.

                            </p>

                            <ul className="mt-6 ml-6 list-disc space-y-3 text-slate-600">

                                <li>Full Name</li>
                                <li>Email Address</li>
                                <li>Phone Number</li>
                                <li>Company Name</li>
                                <li>Project Requirements</li>
                                <li>Career Application Information</li>

                            </ul>

                        </div>

                        {/* Section 2 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                2. How We Use Your Information
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                Information collected through our website is
                                used to respond to enquiries, prepare quotations,
                                process career applications, improve our
                                services, maintain website security and comply
                                with legal obligations.

                            </p>

                        </div>

                        {/* Section 3 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                3. Cookies & Tracking Technologies
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                SteelNova Industries may use cookies and similar
                                technologies to improve website performance,
                                analyse visitor behaviour and enhance user
                                experience. Users may disable cookies through
                                their browser settings if preferred.

                            </p>

                        </div>
                        {/* Section 4 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                4. Data Security
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                SteelNova Industries implements appropriate
                                administrative, technical and organizational
                                security measures to protect your personal
                                information against unauthorized access,
                                disclosure, alteration or destruction. While we
                                strive to protect your data, no internet
                                transmission or electronic storage system can be
                                guaranteed to be 100% secure.

                            </p>

                        </div>

                        {/* Section 5 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                5. Third-Party Services
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                Our website may integrate trusted third-party
                                services such as website hosting, analytics,
                                cloud storage and email communication. These
                                providers only process information required to
                                perform their services and follow their own
                                privacy policies.

                            </p>

                        </div>

                        {/* Section 6 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                6. Data Retention
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                We retain personal information only for as long
                                as necessary to fulfil business requirements,
                                provide requested services, comply with legal
                                obligations and resolve disputes.

                            </p>

                        </div>

                        {/* Section 7 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                7. Your Rights
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                Depending on applicable laws, you may request
                                access to your personal information, correction
                                of inaccurate data, deletion of your information
                                or withdrawal of consent where applicable.

                            </p>

                        </div>

                        {/* Section 8 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                8. Changes to this Privacy Policy
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                SteelNova Industries reserves the right to
                                update this Privacy Policy whenever required.
                                Any revisions will be published on this page
                                with the updated effective date.

                            </p>

                        </div>

                        {/* Section 9 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                9. Contact Information
                            </h3>

                            <div className="mt-6 rounded-2xl bg-slate-50 border p-8">

                                <p className="text-lg font-semibold text-slate-900">
                                    SteelNova Industries
                                </p>

                                <p className="mt-4 text-slate-600">
                                    📍 GIDC, Vapi, Gujarat, India
                                </p>

                                <p className="mt-2 text-slate-600">
                                    📧 info@steelnova.com
                                </p>

                                <p className="mt-2 text-slate-600">
                                    📞 +91 98765 43210
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-slate-900 py-20">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold text-white">
                        Questions About Your Privacy?
                    </h2>

                    <p className="mt-5 text-lg text-slate-300">
                        If you have any questions regarding this Privacy Policy,
                        our team will be happy to assist you.
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