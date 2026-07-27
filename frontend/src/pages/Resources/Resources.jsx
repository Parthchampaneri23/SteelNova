import ResourcesHero from "../../components/resources/ResourcesHero";
import BlogsSection from "../../components/resources/BlogsSection";
import DownloadsSection from "../../components/resources/DownloadsSection";
import CertificatesSection from "../../components/resources/CertificatesSection";
import ResourcesCTA from "../../components/resources/ResourcesCTA";

const Resources = () => {
    return (
        <>
            <ResourcesHero />

            <div id="blogs">
                <BlogsSection />
            </div>

            <div id="downloads">
                <DownloadsSection />
            </div>

            <div id="certificates">
                <CertificatesSection />
            </div>

            <ResourcesCTA />
        </>
    );
};

export default Resources;