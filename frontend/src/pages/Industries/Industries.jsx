import IndustryHero from "../../components/industries/IndustryHero";
import IndustryGrid from "../../components/industries/IndustryGrid";
import IndustryBenefits from "../../components/industries/IndustryBenefits";
import IndustryProcess from "../../components/industries/IndustryProcess";
import IndustryCTA from "../../components/industries/IndustryCTA";
import IndustryDetails from "../../components/industries/IndustryDetails";

const Industries = () => {
    return (
        <>
            <IndustryHero />
            <IndustryGrid />
            <IndustryBenefits />
            <IndustryProcess />
            <IndustryDetails />
            <IndustryCTA />
        </>
    );
};

export default Industries;