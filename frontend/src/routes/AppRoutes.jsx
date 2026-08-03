import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Industries from "../pages/Industries/Industries";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import Projects from "../pages/Projects/Projects";
import Resources from "../pages/Resources/Resources";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import Sitemap from "../pages/Sitemap";
import NotFound from "../pages/NotFound/NotFound";

// Admin Pages
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Contacts from "../pages/admin/Contacts";
import CareersAdmin from "../pages/admin/Careers";

import ProtectedRoute from "../components/admin/ProtectedRoute";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>

                <Route element={<MainLayout />}>

                    {/* Website Pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:slug" element={<ProductDetails />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/infrastructure" element={<Infrastructure />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Footer Pages */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/sitemap" element={<Sitemap />} />

                    {/* Admin Login */}
                    <Route path="/admin/login" element={<Login />} />

                    {/* Protected Admin Routes */}
                    <Route element={<ProtectedRoute />}>

                        <Route
                            path="/admin/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/admin/contacts"
                            element={<Contacts />}
                        />

                        <Route
                            path="/admin/careers"
                            element={<CareersAdmin />}
                        />

                    </Route>

                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;