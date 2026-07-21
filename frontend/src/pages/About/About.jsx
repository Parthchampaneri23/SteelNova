import AboutHero from "../../components/about/AboutHero";
import CompanyOverview from "../../components/about/CompanyOverview";
import OurStory from "../../components/about/OurStory";
import VisionMission from "../../components/about/VisionMission";
import CoreValues from "../../components/about/CoreValues";
import ManufacturingExcellence from "../../components/about/ManufacturingExcellence";
import Certifications from "../../components/about/Certifications";
import GlobalPresence from "../../components/about/GlobalPresence";

const About = () => {
    return (
        <>
            <AboutHero />
            <CompanyOverview />
            <OurStory />
            <VisionMission />
            <CoreValues />
            <ManufacturingExcellence />
            <Certifications />
            <GlobalPresence />
        </>
    );
};

export default About;