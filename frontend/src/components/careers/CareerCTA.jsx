import { useState } from "react";
import { X } from "lucide-react";

const CareerCTA = () => {
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        file: null,
        message: '',
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\w[\w.-]*@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
        if (!formData.position) newErrors.position = 'Please select a position';
        if (!formData.file) newErrors.file = 'Please upload your resume';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setShowThankYou(true);
        }
    };
    return (
        <section
            id="apply"
            className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-14"
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-5">

                <div className="text-center text-white mb-16">

                    <span className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
                        Join SteelNova
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Apply For Your Dream Career
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
                        Ready to build the future with SteelNova? Submit your
                        application and our recruitment team will contact you
                        shortly.
                    </p>

                </div>

                <div className="max-w-4xl mx-auto rounded-3xl bg-white p-10 shadow-2xl">

                    <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}

                        <select
                            className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        >
                            <option value="">Select Position</option>
                            <option>Mechanical Engineer</option>
                            <option>Production Engineer</option>
                            <option>Quality Engineer</option>
                            <option>Design Engineer</option>
                            <option>Maintenance Engineer</option>
                            <option>Sales Engineer</option>
                        </select>
                        {errors.position && <p className="text-red-600 text-sm mt-1">{errors.position}</p>}

                        <div className="md:col-span-2">

                            <input
                                type="file"
                                className="w-full rounded-xl border border-slate-300 p-4"
                                onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                            />
                            {errors.file && <p className="text-red-600 text-sm mt-1">{errors.file}</p>}

                        </div>

                        <div className="md:col-span-2">

                            <textarea
                                rows="5"
                                placeholder="Tell us about yourself..."
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}

                        </div>

                        <div className="md:col-span-2">

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                            >
                                Submit Application
                            </button>

                        </div>

                    </form>
                    {showThankYou && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                            <div className="relative bg-white p-8 rounded-xl max-w-md text-center">
                                <button onClick={() => setShowThankYou(false)} className="absolute right-4 top-4 rounded-full bg-gray-200 p-1 hover:bg-gray-400">
                                    <X size={20} />
                                </button>
                                <h3 className="text-2xl font-bold mb-4">Application Submitted</h3>
                                <p className="text-gray-700">Thank you for applying. Our team will review your application and contact you shortly.</p>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default CareerCTA;