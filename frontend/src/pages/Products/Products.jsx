// Updated to avoid duplicate navigation and footer
import ProductsHero from "../../components/products/ProductsHero";
import ProductCategories from "../../components/products/ProductCategories";
import ProductsSection from "../../components/products/ProductsSection";
import WhyChooseProducts from "../../components/products/WhyChooseProducts";
import ProductsCTA from "../../components/products/ProductsCTA";


const Products = () => {
    return (
        <>
            <ProductsHero />
            <ProductCategories />
            <ProductsSection />
            <WhyChooseProducts />
            <ProductsCTA />
        </>
    );
};

export default Products;