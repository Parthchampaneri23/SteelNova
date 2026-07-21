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
import NotFound from "../pages/NotFound/NotFound";

import ScrollToTop from "../components/common/ScrollToTop";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
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
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;