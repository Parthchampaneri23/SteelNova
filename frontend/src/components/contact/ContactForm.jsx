import { useState } from "react";
import axios from "axios";
import { Building2, Mail, Phone, User, ArrowRight, CheckCircle2, Package } from "lucide-react";
import { allProducts } from "../../data/allProducts";

const ContactForm = () => {
    const categories = [...new Set(allProducts.map((p) => p.category))];
    const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", subject: "", product: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const n = {};
        if (!formData.name.trim()) n.name = "Full name is required";
        if (!formData.email.trim()) n.email = "Email address is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) n.email = "Please enter a valid email address";
        if (!formData.phone.trim()) n.phone = "Phone number is required";
        else if (!/^[\d\s+\-()]{7,15}$/.test(formData.phone)) n.phone = "Please enter a valid phone number";
        if (!formData.subject.trim()) n.subject = "Subject is required";
        if (!formData.message.trim()) n.message = "Message is required";
        else if (formData.message.trim().length < 10) n.message = "Message must be at least 10 characters";
        setErrors(n);
        return !Object.keys(n).length;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(p => ({ ...p, [name]: value }));
        if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/api/contact",
                formData
            );

            if (response.data.success) {
                setSubmitted(true);

                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    subject: "",
                    product: "",
                    message: "",
                });

                setErrors({});

                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            }
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to send message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const inputClass = field => `w-full rounded-xl border py-3 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${errors[field] ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-slate-300"}`;

    return (
        <section id="quote-form" className="bg-gradient-to-b from-slate-50 to-white py-14">
            <div className="max-w-7xl mx-auto px-4 lg:px-5">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    {/* Left side */}
                    <div>
                        <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">Get In Touch</span>
                        <h2 className="mt-4 text-5xl font-bold text-slate-900">Request A Quote</h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Looking for industrial pumps, valves, pressure vessels, heat exchangers, or custom fabrication solutions? Fill out the form and our engineering team will get back to you within 24 hours.
                        </p>
                        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
                            <img src="/contact/contact-form.png" alt="Contact" className="w-full transition-transform duration-700 hover:scale-105" />
                        </div>
                    </div>

                    {/* Right side – the form */}
                    <div className="rounded-3xl bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-100">
                        {submitted && (
                            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-green-700 animate-fade-in">
                                <CheckCircle2 size={22} className="shrink-0" />
                                <span className="font-medium">Thank you! Your message has been sent successfully.</span>
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                            {/* Name & Company */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="group relative">
                                    <User size={18} className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.name ? "text-red-400" : "text-slate-400"}`} />
                                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                                        placeholder="Full Name *" className={`${inputClass("name")} pl-12 pr-4`} />
                                </div>
                                <div className="group relative">
                                    <Building2 size={18} className="absolute left-4 top-4 text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600" />
                                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                                        placeholder="Company" className={`${inputClass("company")} pl-12 pr-4`} />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="group relative">
                                    <Mail size={18} className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.email ? "text-red-400" : "text-slate-400"}`} />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                                        placeholder="Email Address *" className={`${inputClass("email")} pl-12 pr-4`} />
                                </div>
                                <div className="group relative">
                                    <Phone size={18} className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.phone ? "text-red-400" : "text-slate-400"}`} />
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                        placeholder="Phone Number *" className={`${inputClass("phone")} pl-12 pr-4`} />
                                </div>
                            </div>

                            {/* Subject */}
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                                placeholder="Subject *" className={`${inputClass("subject")} px-4`} />

                            {/* Product of Interest */}
                            <div className="group relative">
                                <Package size={18} className={`absolute left-4 top-4 transition-colors duration-300 group-focus-within:text-blue-600 ${errors.product ? "text-red-400" : "text-slate-400"}`} />
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className={`${inputClass("product")} pl-12 pr-4 appearance-none bg-white cursor-pointer`}
                                >
                                    <option value="">Product of Interest</option>
                                    <option value="General Enquiry">General Enquiry</option>
                                    {categories.map((cat) => (
                                        <optgroup key={cat} label={cat}>
                                            {allProducts
                                                .filter((p) => p.category === cat)
                                                .map((p) => (
                                                    <option key={p.id} value={p.name}>
                                                        {p.name}
                                                    </option>
                                                ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <span className="pointer-events-none absolute right-4 top-4 text-slate-400">▾</span>
                            </div>

                            {/* Message */}
                            <textarea rows="6" name="message" value={formData.message} onChange={handleChange}
                                placeholder="Tell us about your requirements... *"
                                className={`${inputClass("message")} px-4 resize-none`} />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight
                                            size={20}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
