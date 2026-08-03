import { products } from "../../data/products";
import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
} from "lucide-react";

import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/logo/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white">

            {/* Top CTA */}
            <div className="border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 lg:px-5 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Looking for Reliable Industrial Solutions?
                        </h2>

                        <p className="mt-2 text-slate-300">
                            Let's discuss your project and build something exceptional together.
                        </p>
                    </div>

                    <Link
                        to="/contact#quote-form"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                    >
                        Get A Quote
                        <ArrowRight size={18} />
                    </Link>

                </div>
            </div>

            {/* Main Footer */}

            <div className="max-w-7xl mx-auto px-4 lg:px-5 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-14">

                {/* Company */}

                <div>

                    <img
                        src={logo}
                        alt="SteelNova"
                        className="h-16 mb-6"
                    />

                    <p className="leading-8 text-slate-400">
                        SteelNova Industries delivers innovative engineering,
                        precision manufacturing and reliable industrial
                        solutions trusted by customers worldwide.
                    </p>

                    <div className="flex gap-4 mt-8">

                        <a
                            href="#"
                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                        >
                            <FaLinkedinIn className="transition group-hover:scale-110" />
                        </a>

                        <a
                            href="#"
                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                        >
                            <FaFacebookF className="transition group-hover:scale-110" />
                        </a>

                        <a
                            href="#"
                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-pink-600"
                        >
                            <FaInstagram className="transition group-hover:scale-110" />
                        </a>

                        <a
                            href="#"
                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-red-600"
                        >
                            <FaYoutube className="transition group-hover:scale-110" />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="mb-6 text-2xl font-bold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4">

                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/">Home</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/about">About</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/products">Products</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/industries">Industries</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/projects">Projects</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/careers">Careers</Link></li>
                        <li><Link className="text-slate-400 hover:text-blue-400 transition" to="/contact">Contact</Link></li>

                    </ul>

                </div>

                {/* Products */}

                <div>

                    <h3 className="mb-6 text-2xl font-bold">
                        Our Products
                    </h3>

                    <ul className="space-y-4">

                        {products.map((product) => (

                            <li key={product.id}>

                                <Link
                                    to={`/products/${product.slug}`}
                                    className="text-slate-400 hover:text-blue-400 transition"
                                >
                                    {product.title}
                                </Link>

                            </li>

                        ))}

                    </ul>

                </div>

                {/* Contact */}

                <div>

                    <h3 className="mb-6 text-2xl font-bold">
                        Contact Us
                    </h3>

                    <div className="space-y-5 text-slate-400">

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=GIDC%20Vapi%20Gujarat%20India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3"
                        >
                            <MapPin className="text-blue-500 mt-1" size={20} />
                            <span>GIDC, Vapi, Gujarat, India</span>
                        </a>

                        <div className="flex gap-3">
                            <Phone className="text-blue-500" size={20} />
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="flex gap-3">
                            <Mail className="text-blue-500" size={20} />
                            <span>info@steelnova.com</span>
                        </div>

                        <div className="flex gap-3">
                            <Clock className="text-blue-500" size={20} />
                            <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
                        </div>

                    </div>

                </div>

            </div>

            {/* Certifications */}

            <div className="border-t border-slate-800">

                <div className="max-w-7xl mx-auto px-4 lg:px-5 py-8 flex flex-wrap justify-center gap-8 text-slate-300">

                    <span>✔ ISO 9001 Certified</span>
                    <span>✔ CE Standards</span>
                    <span>✔ Global Delivery</span>
                    <span>✔ 24/7 Support</span>

                </div>

            </div>

            {/* Copyright */}

            <div className="border-t border-slate-800">

                <div className="max-w-7xl mx-auto px-4 lg:px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

                    <p>
                        © {new Date().getFullYear()} SteelNova Industries. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">

                        <Link
                            to="/privacy-policy"
                            className="hover:text-blue-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms-conditions"
                            className="hover:text-blue-400 transition"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            to="/sitemap"
                            className="hover:text-blue-400 transition"
                        >
                            Sitemap
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;