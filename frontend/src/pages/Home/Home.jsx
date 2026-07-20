import HeroSlider from "../../components/home/HeroSlider";
import StatsSection from "../../components/home/StatsSection";
import AboutPreview from "../../components/home/AboutPreview";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import ProductCategories from "../../components/home/ProductCategories";
import IndustriesSection from "../../components/home/IndustriesSection";
import ManufacturingProcess from "../../components/home/ManufacturingProcess";
import InfrastructureSection from "../../components/home/InfrastructureSection";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import ClientsSection from "../../components/home/ClientsSection";
import Testimonials from "../../components/home/Testimonials";
import CTASection from "../../components/home/CTASection";



const Home = () => {
    return (
        <>
            <HeroSlider />
            <StatsSection />
            <AboutPreview />
            <WhyChooseUs />
            <ProductCategories />
            <IndustriesSection />
            <ManufacturingProcess />
            <InfrastructureSection />
            <FeaturedProjects />
            <ClientsSection />
            <Testimonials />
            <CTASection />
        </>
    );
};

export default Home;