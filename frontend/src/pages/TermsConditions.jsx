import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TermsConditions = () => {
    return (
        <>

            {/* Hero */}

            <section
                className="relative h-[320px] flex items-center justify-center bg-cover bg-center text-white"
                style={{
                    backgroundImage: "url('/legal/Terms&condition.png')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10 max-w-4xl px-6 text-center">

                    <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                        Terms & Conditions
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                        Please read these Terms & Conditions carefully before using
                        SteelNova Industries' website and services.
                    </p>

                    <p className="mt-4 text-sm text-slate-300">
                        Last Updated • August 2026
                    </p>

                </div>
            </section>
            {/* Document */}

            <section className="bg-slate-100 py-20">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-3xl bg-white shadow-xl p-10 lg:p-14">

                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                            STEELNOVA INDUSTRIES
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Terms & Conditions
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">

                            These Terms & Conditions govern your access to and
                            use of the SteelNova Industries website. By
                            accessing our website, you agree to comply with
                            these terms and all applicable laws and regulations.

                        </p>

                        {/* Table of Contents */}

                        <div className="mt-12 rounded-2xl border bg-slate-50 p-8">

                            <h3 className="text-2xl font-bold text-slate-900">
                                Table of Contents
                            </h3>

                            <ol className="mt-6 space-y-3 text-blue-600 font-medium">

                                <li>1. Acceptance of Terms</li>
                                <li>2. Website Usage</li>
                                <li>3. Intellectual Property</li>
                                <li>4. Product Information</li>
                                <li>5. Quotations & Orders</li>
                                <li>6. Limitation of Liability</li>
                                <li>7. Third-Party Links</li>
                                <li>8. Governing Law</li>
                                <li>9. Contact Information</li>

                            </ol>

                        </div>

                        {/* Section 1 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                1. Acceptance of Terms
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                By accessing or using this website, you agree
                                to comply with these Terms & Conditions and all
                                applicable laws. If you do not agree with these
                                terms, please discontinue the use of this
                                website immediately.

                            </p>

                        </div>

                        {/* Section 2 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                2. Website Usage
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                You agree to use this website responsibly and
                                only for lawful purposes.

                            </p>

                            <ul className="mt-6 ml-6 list-disc space-y-3 text-slate-600">

                                <li>No unauthorized access attempts.</li>
                                <li>No malicious software uploads.</li>
                                <li>No misuse of forms or services.</li>
                                <li>No disruption of website functionality.</li>
                                <li>No unlawful use of website content.</li>

                            </ul>

                        </div>

                        {/* Section 3 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                3. Intellectual Property
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                All content including logos, graphics,
                                photographs, product descriptions, documents,
                                layouts and website source code are the
                                intellectual property of SteelNova Industries
                                unless otherwise stated. Unauthorized copying,
                                reproduction or redistribution is prohibited.

                            </p>

                        </div>
                        {/* Section 4 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                4. Product Information
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                SteelNova Industries strives to ensure that all
                                product descriptions, specifications and
                                technical information published on this website
                                are accurate. However, product specifications,
                                pricing and availability may change without
                                prior notice as part of our continuous
                                improvement process.

                            </p>

                        </div>

                        {/* Section 5 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                5. Quotations & Orders
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                Any quotation requested through this website is
                                provided for informational purposes only.
                                Final pricing, commercial terms, delivery
                                schedules and project scope will be confirmed
                                through official communication from SteelNova
                                Industries.

                            </p>

                        </div>

                        {/* Section 6 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                6. Limitation of Liability
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                SteelNova Industries shall not be liable for
                                any indirect, incidental or consequential
                                damages resulting from the use of this website
                                or reliance upon any information published
                                herein.

                            </p>

                        </div>

                        {/* Section 7 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                7. Third-Party Links
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                This website may contain links to third-party
                                websites for convenience. SteelNova Industries
                                is not responsible for the content, policies or
                                privacy practices of any external websites.

                            </p>

                        </div>

                        {/* Section 8 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                8. Governing Law
                            </h3>

                            <p className="mt-5 leading-8 text-slate-600">

                                These Terms & Conditions shall be governed by
                                and interpreted in accordance with the laws of
                                India. Any disputes shall be subject to the
                                jurisdiction of the competent courts of Gujarat,
                                India.

                            </p>

                        </div>

                        {/* Section 9 */}

                        <div className="mt-14 border-t pt-10">

                            <h3 className="text-3xl font-bold text-slate-900">
                                9. Contact Information
                            </h3>

                            <div className="mt-6 rounded-2xl border bg-slate-50 p-8">

                                <p className="text-lg font-semibold text-slate-900">
                                    SteelNova Industries
                                </p>

                                <p className="mt-4 text-slate-600">
                                    📍 GIDC, Vapi, Gujarat, India
                                </p>

                                <p className="mt-2 text-slate-600">
                                    📧 sales@steelnova.com
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
                        Questions About These Terms?
                    </h2>

                    <p className="mt-5 text-lg text-slate-300">
                        If you require clarification regarding these Terms &
                        Conditions, our team will be happy to assist you.
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