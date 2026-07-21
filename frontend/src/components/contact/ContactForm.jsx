import { Building2, Mail, Phone, User, ArrowRight } from "lucide-react";

const ContactForm = () => {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-16">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid gap-16 lg:grid-cols-2 items-center">

                    {/* Left Side */}
                    <div>

                        <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
                            Get In Touch
                        </span>

                        <h2 className="mt-4 text-5xl font-bold text-slate-900">
                            Request A Quote
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Looking for industrial pumps, valves, pressure vessels,
                            heat exchangers, or custom fabrication solutions?
                            Fill out the form and our engineering team will get
                            back to you within 24 hours.
                        </p>

                        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="/contact/contact-form.png"
                                alt="Contact"
                                className="w-full transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="rounded-3xl bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-100">

                        <form className="space-y-6">

                            <div className="grid gap-6 md:grid-cols-2">

                                <div className="group relative">
                                    <User
                                        size={18}
                                        className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div className="group relative">
                                    <Building2
                                        size={18}
                                        className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                            </div>

                            <div className="grid gap-6 md:grid-cols-2">

                                <div className="group relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div className="group relative">
                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                            />

                            <textarea
                                rows="6"
                                placeholder="Tell us about your requirements..."
                                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                            ></textarea>

                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl active:scale-95"
                            >
                                Send Message

                                <ArrowRight
                                    size={20}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactForm;