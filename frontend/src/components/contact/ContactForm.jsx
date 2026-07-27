import { useState } from "react";
import { Building2, Mail, Phone, User, ArrowRight, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[\d\s+\-()]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSubmitted(true);
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({});

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const inputClass = (field) =>
        `w-full rounded-xl border py-3 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${errors[field]
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-slate-300"
        }`;

    return (
        <section
            id="quote-form"
            className="bg-gradient-to-b from-slate-50 to-white py-16"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-5">

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

                        {/* Success Message */}
                        {submitted && (
                            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-green-700 animate-fade-in">
                                <CheckCircle2 size={22} className="shrink-0" />
                                <span className="font-medium">
                                    Thank you! Your message has been sent successfully.
                                </span>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                            <div className="grid gap-6 md:grid-cols-2">

                                {/* Full Name */}
                                <div>
                                    <div className="group relative">
                                        <User
                                            size={18}
                                            className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.name ? "text-red-400" : "text-slate-400"
                                                }`}
                                        />

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            className={`${inputClass("name")} pl-12 pr-4`}
                                        />
                                    </div>

                                    {errors.name && (
                                        <p className="mt-1.5 text-sm text-red-500 pl-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Company */}
                                <div>
                                    <div className="group relative">
                                        <Building2
                                            size={18}
                                            className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600"
                                        />

                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company"
                                            className={`${inputClass("company")} pl-12 pr-4`}
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="grid gap-6 md:grid-cols-2">

                                {/* Email */}
                                <div>
                                    <div className="group relative">
                                        <Mail
                                            size={18}
                                            className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.email ? "text-red-400" : "text-slate-400"
                                                }`}
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            className={`${inputClass("email")} pl-12 pr-4`}
                                        />
                                    </div>

                                    {errors.email && (
                                        <p className="mt-1.5 text-sm text-red-500 pl-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <div className="group relative">
                                        <Phone
                                            size={18}
                                            className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.phone ? "text-red-400" : "text-slate-400"
                                                }`}
                                        />

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number *"
                                            className={`${inputClass("phone")} pl-12 pr-4`}
                                        />
                                    </div>

                                    {errors.phone && (
                                        <p className="mt-1.5 text-sm text-red-500 pl-1">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                            </div>

                            {/* Subject */}
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject *"
                                    className={`${inputClass("subject")} px-4`}
                                />

                                {errors.subject && (
                                    <p className="mt-1.5 text-sm text-red-500 pl-1">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    rows="6"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements... *"
                                    className={`${inputClass("message")} px-4 resize-none`}
                                ></textarea>

                                {errors.message && (
                                    <p className="mt-1.5 text-sm text-red-500 pl-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

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